<template>
	<v-container fluid>
		<div exact>
			<h1 style="text-align:center">CADASTRO</h1>
		</div>

		<v-row justify="center">
			<v-dialog
				v-model="dialogCadastro"
				persistent
				max-width="600px">

					<!-- <template v-slot:activator="{ on, attrs }">

					</template> -->

			</v-dialog>
		</v-row>
	</v-container>
</template>