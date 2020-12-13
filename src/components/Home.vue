<template>
	<v-container fluid>
		<div exact>
			<h1 style="text-align:center">HOME</h1>
		</div>
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