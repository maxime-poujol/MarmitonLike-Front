<template>
  <RecipesListContainer>
    <router-link v-for="(recipe,key) in recipes" :key=key :to="{name: 'Recipe', params: {id: recipe.id}}">
      <RecipeContainer>
        <TitleContainer>
          <RecipeName>{{ recipe.name }}</RecipeName>
        </TitleContainer>

      </RecipeContainer>

    </router-link>
  </RecipesListContainer>

</template>

<script>

import {mapState} from 'vuex'
import {RecipeContainer, RecipeName, RecipesListContainer, TitleContainer} from "@/styles/recipes/Recipes.style";

export default {
  name: "Recipes",
  components: {
    RecipeContainer,
    RecipesListContainer,
    TitleContainer,
    RecipeName
  },
  computed: {
    ...mapState(['recipes'])
  },
  created() {
    const token = sessionStorage.token;
    if (!token) {
      this.$router.push('/');
      return;
    }

    this.$store.dispatch("getRecipes");
  }
}
</script>