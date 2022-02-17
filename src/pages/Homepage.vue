<template>
  <Section>
    <Login/>      <!-- Formulaire de connexion -->
    <Barre/>      <!-- barre verticale -->
    <Register/>   <!-- Formulaire de création de compte -->
  </Section>
</template>

<script>

import Login from "@/components/Home/Login";
import Register from "@/components/Home/Register";
import {Section, Barre} from "@/styles/Home/Home.style";

export default {
  name: "Homepage",
  components: {Register, Login, Section, Barre}
}
</script>
