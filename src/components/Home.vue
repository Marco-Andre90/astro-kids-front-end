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
		</v-row>
		<p class="white--text">
		{{ usuarioLogado }}</p>
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
	}
}
</script>

<style>
</style>