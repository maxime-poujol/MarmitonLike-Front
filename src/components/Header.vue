<template>
  <header>
    <Nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/myrecipe">Mes recettes</router-link>
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
