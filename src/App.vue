<template>
  <v-app>
    <Header />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header';
export default {
  //name: 'App',
  components: {
    Header,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
  *{
    font-weight: 600;
    font-family: 'Baloo 2', cursive;
  }
</style>
