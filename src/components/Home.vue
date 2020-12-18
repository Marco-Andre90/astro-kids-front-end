<template>
	<v-container fluid>
		<v-row class="justify-center">
			<v-btn
				color="#F72585"
				to="/comunicacao"
				class="ml-4 mt-10 white--text">CARTAO (placeholder)</v-btn>
			<v-btn
				color="#F72585"
				to="/agenda"
				class="ml-4 mt-10 white--text">AGENDA (placeholder)</v-btn>
			<v-btn
				color="#F72585"
				@click="resetaEstado"
				class="ml-4 mt-10 white--text">RESETA ESTADO (debugger)</v-btn>
		</v-row>
		<v-container>
			<p class="white--text text-center mt-10">
			usuario logado: {{ usuarioLogado }}<br>
			familia logada: {{ familiaLogada }}</p>
		</v-container>
        <Login v-if="usuarioLogado.id_usuario == null" />
	</v-container>
</template>

<script>
import store from '../store'
import Login from './acesso/Login'
export default {
    components: {
        Login
	},
	methods: {
		resetaEstado() {
			store.replaceState({
					agenda: store.state.agenda,
					comunicacao: store.state.comunicacao,
					familia: {},
					familiaLogada: {},
					login: store.state.login,
					usuario:{},
					usuarioCrianca:{},
					usuarioLogado: {}
			})
			localStorage.clear()
		}
	},
	computed: {
		agenda() {
			return store.state.agenda
		},
		comunicacao() {
			return store.state.comunicacao
		},
		familia() {
			return store.state.familia
		},
		familiaLogada() {
			return store.state.familiaLogada
		},
		login() {
			return store.state.login
		},
		usuario() {
			return store.state.usuario
		},
		usuarioCrianca() {
			return store.state.usuarioCrianca
		},
		usuarioLogado() {
			return store.state.usuarioLogado
		}
	},
	created(){
		let user = localStorage.getItem('usuarioLogado')
			if(user){
				store.commit('setUsuarioLogado', JSON.parse(user))	
			}
	}
}
</script>

<style>
</style>