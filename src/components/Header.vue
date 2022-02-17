<template>
  <header>
    <Nav>
      <router-link :to="{name: 'homePage'}">Accueil</router-link>
      <router-link :to="{name: 'myRecipe'}">Mes recettes</router-link>
    </Nav>
  </header>
</template>

<script>
import {Nav} from "@/styles/Header.style";

export default {
  components: {
    Nav
  },
  name: "Header"
}
</script>
