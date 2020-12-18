<template>
	<v-row v-if="temUserLogado" class="justify-center pt-12 mt-12">
		<v-col md="5" cols="12">
			<v-container class="my-0 py-0">
				<v-card outlined class="text-center">
					<v-card-text>
						<h1 class="mt-5" style="color: purple; font-weight: 800; font-size:40px">Login</h1>
						<v-container class="mt-5">
							<v-row column class="justify-center text-center">
								<v-form ref="form"
										v-model="valid"
										lazy-validation>
										<v-text-field
											v-model="acesso.login"
											:counter="15"
											:rules="regras"
											label="Usuario"
											required />
										<v-text-field 
											v-model="acesso.senha"
											:append-icon="mostrarSenha ? 'mdi-eye' : 'mdi-eye-off'"
											:rules="regras"
											:type="mostrarSenha ? 'text' : 'password'"
											label="Senha"
											hint="Pelo menos 4 caracteres"
											@click:append="mostrarSenha = !mostrarSenha" 
											required />
										<v-btn
											:disabled="!valid"
											color="#4CC9F0"
											class="mr-4 mt-10 white--text"
											@click="validar">Entrar</v-btn>
										<v-btn
											color="#F72585"
											to="/cadastro"
											class="ml-4 mt-10 white--text">Primeiro Acesso</v-btn>
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
export default {
	data: () => ({
		valid: true,
		mostrarSenha: false,
		regras: [
			v => !!v || 'Campo Obrigatório'
		],
	}),
	methods: {
		validar() {
			this.$refs.form.validate()
			store.dispatch('logarNoSistema', [this.acesso.login, this.acesso.senha])
			this.$router.push({ name: 'home' })
		},
	},
	computed: {
		acesso() {
			return store.state.login
		},
		usuarioLogado(){
			return store.state.usuarioLogado
		},
		temUserLogado() {
			if(store.state.usuarioLogado.idUsuario == null) {
				return true
			} else {
				return false
			}
		}
	}
}
</script>