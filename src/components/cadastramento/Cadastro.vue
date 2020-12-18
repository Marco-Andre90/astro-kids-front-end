<template>
		<v-row class="justify-end align-stretch py-0">
			<v-col md="7" cols="12">		
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
				<v-row column class="justify-center white--text text-justify">
					<v-col md="8" cols="12" >
						<h1 class="mt-5" style="font-weight: 800; font-size:31px">
							Astro Kids foi criado para ser
							uma ponte entre o nosso
							usuário com transtornos do
							espectro autista(TEA) e seus
							responsáveis, por isso é
							fundamental o cadastro dos
							RESPONSAVÉIS em
							nossa plataforma!
						</h1>
					</v-col>
				</v-row>
				<v-row column class="justify-end">
						<v-img  max-width="70%" src="../../assets/imgs/PaiEFilha.png" />
				</v-row>
			</v-col>
			<v-col md="5" cols="12" style="background-color:#fff; height:1200px">
				<v-container class="mt-10 py-0">
					<v-card class="text-center" elevation="0">
						<v-card-text class="mt-20">
						<h1 class="mt-5" style="font-weight: 800; font-size:40px">Cadastro</h1>
							<v-container>
								<v-row column class="justify-center text-center">
									<v-form ref="form"
											v-model="valid"
											lazy-validation>

											<div v-if="stepCadastro == 0 || stepCadastro == 1">
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
												:items="setTipos"
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
												v-model="usuario.userLogin"
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

											<!-- famlia -->
											<h1 class="mt-10" style="font-weight: 800;">Família</h1>
											<v-text-field
												v-model="familia.nomeFamilia"
												:rules="regras"
												:placeholder="usuario.sobrenome"
												label="Nome da Familia"
												required />
											</div>
											<div v-if="stepCadastro == 2">
											<!-- criança -->
											<h1 class="mt-10" style="font-weight: 800;">Criança</h1>
											<v-text-field
												v-model="usuarioCrianca.nome"
												label="Nome da Criança"
												required />
											<v-text-field
												v-model="usuarioCrianca.sobrenome"
												label="Sobrenome da Criança"
												required />
											<!-- data -->
											<v-menu
												ref="menu2"
												v-model="menu2"
												:close-on-content-click="false"
												:return-value.sync="date2"
												transition="scale-transition"
												offset-y
												min-width="290px"
											>
												<template v-slot:activator="{ on, attrs }">
												<v-text-field
													v-model="date2"
													label="Data de Nascimento"
													prepend-icon="mdi-calendar"
													readonly
													v-bind="attrs"
													v-on="on"
												></v-text-field>
												</template>
												<v-date-picker
												v-model="date2"
												no-title
												scrollable
												>
												<v-spacer></v-spacer>
												<v-btn
													text
													color="primary"
													@click="menu2 = false"
												>
													Cancel
												</v-btn>
												<v-btn
													text
													color="primary"
													@click="$refs.menu2.save(date2)"
												>
													OK
												</v-btn>
												</v-date-picker>
											</v-menu>
											<vue-tel-input-vuetify 
												label="Celular"
												v-model="usuarioCrianca.celular"></vue-tel-input-vuetify>
											<v-text-field
												v-model="usuarioCrianca.endereco"
												label="Endereço Completo"
												required />
											<v-text-field
												v-model="usuarioCrianca.usuarioLogin"
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
											<!-- fim criança -->

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
</template>

<script>
import store from '../../store'
//import api from '../../service/api'
export default {
	data: () => ({
		stepCadastro: 0,
		valid: true,
		tipos: ['Administrador', 'Responsável', 'Criança'],
		mostrarSenha: false,
		date: new Date().toISOString().substr(0, 10),
		date2: new Date().toISOString().substr(0, 10),
		menu: false,
		menu2: false,
		modal: false,
		modal2: false,
		hasId: false, //não está sendo mais usado mas ficará aqui para futura referencia
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
				if (this.stepCadastro == 0){
					this.registrarFamilia()
					this.stepCadastro++
				}
				if(this.stepCadastro == 1){
					this.registrar()
					this.stepCadastro++
				} else if (this.stepCadastro == 2) {
					this.registrarCrianca()
					this.$router.push({ name: 'home' })
				}
			// } else {
			// 	console.log('Falha na validação')
			// }
		},
		registrarFamilia() {
			store.dispatch('registrarFamilia', [store.state.familia])
		},
		registrar() {
			store.state.usuario.dataNascimento = this.date
			store.dispatch('registroUsuario', [store.state.usuario])
		},
		registrarCrianca() {
			store.state.usuario.dataNascimento = this.date
			store.state.usuarioCrianca.tipo = 'Criança'
			store.dispatch('registraCrianca', [store.state.usuarioCrianca])
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
		setTipos() {
			if(this.stepCadastro == 0 || this.stepCadastro == 1) {
				return ['Administrador']
			} else if (this.stepCadastro == 2) {
				return ['Criança']
			} else {
				return this.tipos
			}
		},
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
		},
		//não está sendo mais usado mas ficará aqui para futura referencia
		temUserLogado() {
			if(store.state.usuarioLogado.id_usuario == null) {
				return true
			} else {
				return false
			}
		}
	}
}
</script>