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
        <Login />
	</v-container>
</template>

<script>
import Login from './acesso/Login'
export default {
    components: {
        Login
    },
}
</script>

<style>
</style>