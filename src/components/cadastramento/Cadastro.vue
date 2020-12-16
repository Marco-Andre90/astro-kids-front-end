<template>
	<v-container fluid>
		<v-row class="justify-start ml-8">
			<v-btn
				class="mt-3"
				color="#FFF"
				outlined
				to="/">
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
												v-model="nome"
												:rules="regras"
												label="Nome"
												required />
											<v-text-field
												v-model="sobrenome"
												:rules="regras"
												label="Sobrenome"
												required />
											<!-- tipo -->
											<v-select
												v-model="tipo"
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
												v-model="celular"></vue-tel-input-vuetify>
											<!--  -->
											<v-text-field
												v-model="endereco"
												:rules="regras"
												label="Endereço Completo"
												required />
											<v-text-field
												v-model="email"
												label="E-mail (Opcional)" />
											<v-text-field
												class="mt-10"
												v-model="usuario"
												:rules="regras"
												label="Usuario para login"
												required />
											<v-text-field 
												v-model="senha"
												:append-icon="mostrarSenha ? 'mdi-eye' : 'mdi-eye-off'"
												:rules="senhaRegras"
												:type="mostrarSenha ? 'text' : 'password'"
												label="Senha"
												hint="Pelo menos 4 caracteres"
												@click:append="mostrarSenha = !mostrarSenha" 
												required />

											<!-- famlia -->
											<h1 class="mt-10" style="font-weight: 800;">Família</h1>
											<v-text-field
												v-model="nomeFamilia"
												:rules="regras"
												:placeholder="sobrenome"
												label="Nome da Familia"
												required />
											<!-- criança -->
											<h1 class="mt-10" style="font-weight: 800;">Criança</h1>
											<v-text-field
												v-model="nomeCrianca"
												:rules="regras"
												label="Nome da Criança"
												required />
											<v-text-field
												v-model="sobrenomeCrianca"
												:rules="regras"
												label="Sobrenome da Criança"
												required />
											<v-text-field
												v-model="usuarioCrianca"
												:rules="regras"
												label="Usuario da Criança"
												required />
											<v-text-field 
												v-model="senhaCrianca"
												:append-icon="mostrarSenha ? 'mdi-eye' : 'mdi-eye-off'"
												:rules="senhaRegras"
												:type="mostrarSenha ? 'text' : 'password'"
												label="Senha da Criança"
												hint="Pelo menos 4 caracteres"
												@click:append="mostrarSenha = !mostrarSenha" 
												required />

											<v-btn
												:disabled="!valid"
												color="#4CC9F0"
												class="mr-4 mt-10 white--text"
												@click="validar">Registrar</v-btn>
											<v-btn
												color="#F72585"
												to="/"
												class="ml-4 mt-10 white--text">Cancelar</v-btn>
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
export default {
	data: () => ({
		valid: true,
		nome: '',
		sobrenome: '',
		endereco: '',
		email: '',
		usuario: '',
		senha: '',
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
		usuarioCrianca: '',
		senhaCrianca: '',
		regras: [
			v => !!v || 'Este campo é obrigatório'
		],
		senhaRegras: [
			v => !!v || 'Necessário informar senha',
			v => v.length >= 4 || 'A senha deve conter no mínimo 4 caracteres'
		]
	}),
	methods: {
		validar() {
			this.$refs.form.validate()
		},
		registrar() {
			
		}
		// alertmutations(){
		// 	store.commit('bindLogin', "oi")
		// }
	},
	computed: {
		state() {
			return store.state.usuario
		}
	}
}
</script>