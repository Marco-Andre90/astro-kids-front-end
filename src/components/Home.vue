<template>
	<v-container fluid>
		<v-btn
			color="#F72585"
			to="/comunicacao"
			class="ml-4 mt-10 white--text">CARTAO (placeholder)</v-btn>
		<v-btn
			color="#F72585"
			to="/agenda"
			class="ml-4 mt-10 white--text">AGENDA (placeholder)</v-btn>
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