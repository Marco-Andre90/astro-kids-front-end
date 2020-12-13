<template>
  <div>
    <button @click="teste">TESTE</button>
    {{ teste2 }}
  </div>
</template>

<script>
import api from '../service/api'
export default {
  data() {
    return {
      teste2: null
    }
  },
  methods: {
    teste() {
      api.get('cartoes').then((res) => {
        this.teste2 = res.data
      })
    }
  }
}
</script>