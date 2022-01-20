<template>
  <div>
    <Login/>      <!-- Formulaire de connexion -->
    <div></div>   <!-- barre verticale -->
    <Register/>   <!-- Formulaire de création de compte -->
  </div>
</template>

<script>
import Login from "@/components/Login";
import Register from "@/components/Register";
export default {
  name: "Homepage",
  components: {Register, Login}
}
</script>
