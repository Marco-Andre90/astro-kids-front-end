<template>
	<v-container fluid v-if="isLoaded">
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
		<v-container fluid style="max-width:85%">
			<v-row class="justify-center text-center mt-5">
				<v-col
					v-for="(card, i) in cards"
					:key="i"
					sm="6" md="4" lg="3"
					cols="12">
					<v-container class="my-0 py-0">
						<v-card rounded="lg" class="mx-auto" hover style="height:100%" outlined
							@click="confirmarCard(card)">
							<v-img 
								height="300px"
								:src="card.caminhoImg"   />
							<v-card-title
								style="background-color:#4CC9F0; 
										font-weight: 800; font-size:30px"
								class="white--text justify-center">
								{{ card.nomeCartao }}</v-card-title>
						</v-card>
					</v-container>
				</v-col>
			</v-row>
			<div class="text-center">
				<v-dialog
				v-model="dialog"
				width="400">
					<v-card rounded="lg" class="mx-auto" hover style="height:100%" outlined>
						<v-img 
							class="justify-center"
									height="430px"
									:src="selectedCard.caminhoImg"   />
						
						<v-card-title
							style="background-color:#4CC9F0; 
									font-weight: 800; font-size:30px"
							class="white--text justify-center">
							{{selectedCard.nomeCartao}}
						</v-card-title>
						<v-card-actions class="justify-center"
							style="background-color:#4CC9F0;">
						<v-btn
							color="#F72585" 
							@click="envioCard"
							class="mr-2 white--text">Enviar!</v-btn>
						<v-btn
							outlined
							style="border-color: #FFF; color:#FFF;"
							@click="dialog = false"
							class="ml-2">Cancelar!</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</div>
		</v-container>
	</v-container>
</template>

<script>
import store from '../../store'
export default {
	data: () => ({
		isLoaded: false,
		nomeCard: '',
		img: '',
		selectedCard: '',
		dialog: false
	}),
	beforeCreate(){
		console.log('gets', store)
		store.dispatch('listarCartoes', [{app: this}])
	},
	methods: {
		confirmarCard(selectedCard){
			this.selectedCard = selectedCard
			store.commit('setCartoes', this.selectedCard)
			this.dialog = true
		},
		envioCard(){
			store.dispatch('enviaCartao', [this.usuarioLogado, this.selectedCard])
			this.dialog = false
		}
	},
	computed: { 
		cards(){
			const { cards } = store.state.comunicacao
			return cards 
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
		}
	}
}
</script>