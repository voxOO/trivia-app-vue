<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TriviaApp msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TriviaApp from '@/components/TriviaApp.vue'

export default {
  name: 'home',
  components: {
    TriviaApp
  }
}
</script>
