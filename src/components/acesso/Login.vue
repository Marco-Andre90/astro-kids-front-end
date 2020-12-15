<template>
	<v-row class="justify-center pt-12 mt-12">
		<v-col md="6" cols="12">
			<v-container class="my-0 py-0">
				<v-card outlined class="text-center">
					<v-card-title class="justify-center"
								style="background-color: #7209B7">
						<span class="headline white--text text--accent-2">Login</span>
					</v-card-title>
					<v-card-text>
						<v-container>
							<v-row column class="justify-center text-center" style="">
								<v-form ref="form"
										v-model="valid"
										lazy-validation>
										<v-text-field
											v-model="state.login"
											:counter="15"
											:rules="userRegras"
											label="Usuario"
											required />
										<v-text-field 
											v-model="state.senha"
											:append-icon="mostrarSenha ? 'mdi-eye' : 'mdi-eye-off'"
											:rules="senhaRegras"
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
		userRegras: [
			v => !!v || 'Necessário informar usuário para acesso'
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
		alertmutations(){
			store.commit('bindLogin', "oi")
		}
	},
	computed: {
		state() {
			return store.state.login
		}
	}
}
</script>