<template>
	<v-container class="mt-5">
		<h1 class="mt-10 white--text" style="font-weight: 800;">Família</h1>
		<v-simple-table>
			<template v-slot:default>
				<thead>
					<tr>
						<th class="text-left">
							Nome
						</th>
						<th class="text-left">
							Endereço
						</th>
						<th class="text-left">
							Celular
						</th>
						<th>
							Ações
						</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="usuario in usuarios"
						:key="usuario.nome">
						<td>{{ usuario.nome }}</td>
						<td>{{ usuario.endereco }}</td>
						<td>{{ usuario.celular }}</td>
						<th>
							<v-btn
								class="mx-1" fab small>
								<v-icon>fas fa-user-edit</v-icon>
							</v-btn>
							<v-btn
								class="mx-1" fab small>
								<v-icon>fas fa-user-times</v-icon>
							</v-btn>
						</th>
					</tr>
				</tbody>
			</template>
		</v-simple-table>
	</v-container>
</template>

<script>
export default {
	data () {
		return {
			usuarios : [
				{
					nome: 'Teste Testinho dos Testes Testudos',
					endereco: 'Rua 1',
					celular: '(21) 11111-1111'
				},
				{
					nome: 'Teste 2',
					endereco: 'Rua 2',
					celular: '(21) 22222-2222'
				},
				{
					nome: 'Teste 3',
					endereco: 'Rua 3, apartamento 3, Realengo, Rio de Janeiro - RJ',
					celular: '(21) 33333-3333'
				},
			]
		}
	}
}
</script>