<template>
  <div>
    <div v-for="(recipe,key) in recepies" :key=key>
      <router-link v-bind:to="'/recipe/' + recipe.id">{{recipe.name}}</router-link>
    </div>
  </div>

</template>

<script>

import {mapState} from 'vuex'

export default {
  name: "Recepies",
  computed: {
    ...mapState(['recepies'])
  },
  created() {
    const token = sessionStorage.token;
    if (!token) {
      this.$router.push('/');
      return;
    }

    this.$store.dispatch("getRecepies");
  }
}
</script>

<style scoped>

</style>