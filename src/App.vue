<template>
  <v-app>
    <Header />
    <v-main>
      <!-- <v-img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/487ed1f5-11b6-4bde-bcea-2e8071262d2f/d9d8bdw-436ba0a7-999d-4da2-85ea-5dc21ba4607d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvaS80ODdlZDFmNS0xMWI2LTRiZGUtYmNlYS0yZTgwNzEyNjJkMmYvZDlkOGJkdy00MzZiYTBhNy05OTlkLTRkYTItODVlYS01ZGMyMWJhNDYwN2QucG5nIn1dXX0.6Iy5KKNgXXEawSgpSz2DjYXoOM33LomX9GSjm0-R_gs"> -->
      <v-img src="./assets/imgs/Background.png">
      <router-view></router-view>
      </v-img>
    </v-main>
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

<style>
  *{
    font-weight: 600;
    font-family: 'Baloo 2', cursive;
  }
  .backImg {
    background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/487ed1f5-11b6-4bde-bcea-2e8071262d2f/d9d8bdw-436ba0a7-999d-4da2-85ea-5dc21ba4607d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvaS80ODdlZDFmNS0xMWI2LTRiZGUtYmNlYS0yZTgwNzEyNjJkMmYvZDlkOGJkdy00MzZiYTBhNy05OTlkLTRkYTItODVlYS01ZGMyMWJhNDYwN2QucG5nIn1dXX0.6Iy5KKNgXXEawSgpSz2DjYXoOM33LomX9GSjm0-R_gs");
    background-color: #cccccc;
  }
</style>