<template>
  <div id="app">
    <h3>TRIVIA-APP</h3>
    <nav class="navbar navbar-brand"> 
      <router-link to="/chuck">Chuck</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
