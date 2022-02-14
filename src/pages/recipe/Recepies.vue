<template>
  <RecepiesListContainer>
      <router-link v-for="(recipe,key) in recepies" :key=key :to="'/recipe/' + recipe.id">
        <RecipeContainer>
          <TitleContainer>
            <RecipeName>{{recipe.name}}</RecipeName>
          </TitleContainer>

        </RecipeContainer>

      </router-link>
  </RecepiesListContainer>

</template>

<script>

import {mapState} from 'vuex'
import {RecepiesListContainer, RecipeContainer, RecipeName, TitleContainer} from "@/styles/Recepies/Recepies.style";

export default {
  name: "Recepies",
  components: {
    RecipeContainer,
    RecepiesListContainer,
    TitleContainer,
    RecipeName
  },
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