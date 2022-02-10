<template>
  <div>
    {{ recipe }}
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Recipe",
  computed: {
    ...mapState(['recipe'])
  },
  created() {
    const token = sessionStorage.token;
    if (!token) {
      this.$router.push('/');
      return;
    }

    this.$store.dispatch("getRecipe", this.$route.params.id);
  },
  watch:{
    $route() {
      this.$store.dispatch("getRecipe", this.$route.params.id);
    }
  }
}
</script>

<style scoped>

</style>