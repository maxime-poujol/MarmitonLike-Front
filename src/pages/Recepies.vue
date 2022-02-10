<template>
  <section>
      <router-link v-for="(recipe,key) in recepies" :key=key v-bind:to="'/recipe/' + recipe.id">
        <article>
          <img src="" alt="">
        </article>
        {{recipe.name}}
      </router-link>
  </section>

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