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
		<v-container fluid style="max-width:85%">
			<v-row class="justify-center text-center mt-5">
				<v-col
					v-for="(card, i) in cards"
					:key="i"
					sm="6" md="4" lg="3"
					cols="12">
					<v-container class="my-0 py-0">
						<v-card rounded="lg" class="mx-auto" hover style="height:100%" outlined>
							<v-img 
								height="300px"
								:src="card.img" />
							<v-card-title
								style="background-color:#4CC9F0; 
										font-weight: 800; font-size:30px"
								class="white--text justify-center">
								{{ card.nome }}</v-card-title>
						</v-card>
					</v-container>
				</v-col>
			</v-row>
		</v-container>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		cards: [
			{
				img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
				nome: "Teste 1"
			},
			{
				img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
				nome: "Teste 2"
			},
			{
				img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
				nome: "Teste 3"
			},
			{
				img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
				nome: "Teste 4"
			}
		]
	})
}
</script>