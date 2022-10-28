<script setup>
// This starter template is using Vue 3 <script > SFCs 
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from'./components/HelloWorld.vue';

</script>

<template>

  <div id="app">
  
  <HelloWorld></HelloWorld>
  <!-- <Home></Home> -->
  <!-- <Grupo></Grupo> -->
  <RouterView></RouterView>
  <!-- <RouterLink></RouterLink> -->
 <!-- <NovoContato></NovoContato> -->
 
</div>
</template>

<script>
import './styles/style.css'

import Home from'./Pages/Home.vue'

// import Grupo from '@/Pages/Grupo.vue'

// import { RouterLink, RouterView } from'vue-router'
// import NovoContato from './components/Dados/NovoContato.vue';

export default {
  name: "app",
  component: {
    HelloWorld,
    Home,
    // Grupo,
    // RouterView,
    // RouterLink,
    // NovoContato
  },
}
</script>