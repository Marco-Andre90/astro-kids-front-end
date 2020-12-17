<template>
	<v-container fluid>
		<v-row class="justify-start ml-8">
			<v-btn
				class="mt-3"
				color="#FFF"
				outlined
				@click="resetaEstado">
				<v-icon class="mr-2">
					fa fa-angle-left
				</v-icon>
				Voltar
			</v-btn>
		</v-row>
		<v-row class="justify-end align-stretch mt-0 py-0">
			<v-col md="5" cols="12">
				<v-container class="my-0 py-0">
					<v-card class="text-center" rounded="lg">
						<v-card-text>
						<h1 class="mt-5" style="font-weight: 800; font-size:40px">Cadastro</h1>
							<v-container>
								<v-row column class="justify-center text-center" style="">
									<v-form ref="form"
											v-model="valid"
											lazy-validation>

											<v-text-field
												class="mt-10"
												v-model="usuario.nome"
												:rules="regras"
												label="Nome"
												required />
											<v-text-field
												v-model="usuario.sobrenome"
												:rules="regras"
												label="Sobrenome"
												required />
											<v-select
												v-model="usuario.tipo"
												:items="tiposResponsavel"
												:rules="regras"
												label="Tipo de Usuário" />
											<!-- data -->
											<v-menu
												ref="menu"
												v-model="menu"
												:close-on-content-click="false"
												:return-value.sync="date"
												transition="scale-transition"
												offset-y
												min-width="290px"
											>
												<template v-slot:activator="{ on, attrs }">
												<v-text-field
													v-model="date"
													label="Data de Nascimento"
													prepend-icon="mdi-calendar"
													readonly
													v-bind="attrs"
													v-on="on"
												></v-text-field>
												</template>
												<v-date-picker
												v-model="date"
												no-title
												scrollable
												>
												<v-spacer></v-spacer>
												<v-btn
													text
													color="primary"
													@click="menu = false"
												>
													Cancel
												</v-btn>
												<v-btn
													text
													color="primary"
													@click="$refs.menu.save(date)"
												>
													OK
												</v-btn>
												</v-date-picker>
											</v-menu>
											<vue-tel-input-vuetify 
												label="Celular"
												:rules="regras"
												v-model="usuario.celular"></vue-tel-input-vuetify>
											<!--  -->
											<v-text-field
												v-model="usuario.endereco"
												:rules="regras"
												label="Endereço Completo"
												required />
											<v-text-field
												v-model="usuario.email"
												label="E-mail (Opcional)" />
											<v-text-field
												class="mt-10"
												v-model="usuario.usuario_login"
												:rules="regras"
												label="Usuario para login"
												required />
											<v-text-field 
												v-model="usuario.senha"
												:append-icon="mostrarSenha ? 'mdi-eye' : 'mdi-eye-off'"
												:rules="senhaRegras"
												:type="mostrarSenha ? 'text' : 'password'"
												label="Senha"
												hint="Pelo menos 4 caracteres"
												@click:append="mostrarSenha = !mostrarSenha" 
												required />

											<div v-if="!hasId">
											<!-- famlia -->
											<h1 class="mt-10" style="font-weight: 800;">Família</h1>
											<v-text-field
												v-model="familia.nome"
												:rules="regras"
												:placeholder="usuario.sobrenome"
												label="Nome da Familia"
												required />
											<!-- criança -->
											<h1 class="mt-10" style="font-weight: 800;">Criança</h1>
											<v-text-field
												v-model="usuarioCrianca.nome"
												:rules="regras"
												label="Nome da Criança"
												required />
											<v-text-field
												v-model="usuarioCrianca.sobrenome"
												:rules="regras"
												label="Sobrenome da Criança"
												required />
											<v-text-field
												v-model="usuarioCrianca.usuario_login"
												:rules="regras"
												label="Usuario da Criança"
												required />
											<v-text-field 
												v-model="usuarioCrianca.senha"
												:append-icon="mostrarSenha ? 'mdi-eye' : 'mdi-eye-off'"
												:rules="senhaRegras"
												:type="mostrarSenha ? 'text' : 'password'"
												label="Senha da Criança"
												hint="Pelo menos 4 caracteres"
												@click:append="mostrarSenha = !mostrarSenha" 
												required />
											</div>

											<v-btn
												:disabled="!valid"
												color="#4CC9F0"
												class="mr-4 mt-10 white--text"
												@click="validar">Registrar</v-btn>
											<v-btn
												color="#F72585"
												@click="resetaEstado"
												class="ml-4 mt-10 white--text">
												Cancelar</v-btn>
									</v-form>
								</v-row>
							</v-container>
						</v-card-text>
					</v-card>
				</v-container>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import store from '../../store'
//import api from '../../service/api'
export default {
	data: () => ({
		valid: true,
		nomeFamilia: '',
		tipo: '',
		tiposResponsavel: ['Administrador', 'Responsável'],
		tipos: ['Administrador', 'Responsável', 'Criança'],
		mostrarSenha: false,
		date: new Date().toISOString().substr(0, 10),
		menu: false,
		modal: false,
		nomeCrianca: '',
		sobrenomeCrianca: '',
		hasId: false,
		regras: [
			v => !!v || 'Este campo é obrigatório'
		],
		senhaRegras: [
			v => !!v || 'Necessário informar senha',
			//v => v.length >= 4 || 'A senha deve conter no mínimo 4 caracteres'
		]
	}),
	methods: {
		validar() {
			// if(this.$refs.form.validate()){
				this.registrar()
			// } else {
			// 	console.log('awww')
			// }
		},
		registrar() {
			store.state.usuario.data_nascimento = this.date
			this.loading = true
			store.dispatch('requisicaoZoada', [store.state.usuario, {app: this}])
		},
		resetaEstado() {
			store.replaceState({
					agenda: store.state.agenda,
					comunicacao: store.state.comunicacao,
					familia: {},
					familiaLogada: store.state.familiaLogada,
					login: store.state.login,
					usuario:{},
					usuarioCrianca:{},
					usuarioLogado: store.state.usuarioLogado
			})
			this.$router.push({ name: 'home' })
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
	}
}
</script>