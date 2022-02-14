<template>
  <Section>
    <RecipeTitle>
      <h1>{{ upperFirst(recipe.name) }}</h1>
    </RecipeTitle>

    <RecipeImage :src="recipe.image || 'http://via.placeholder.com/250'" alt=""/>
    <SectionTitle>
      <h2>Ingrédients:</h2>
    </SectionTitle>
    <IngredientSection>
      <Ingredient v-for="(ingredient,key) in recipe.ingredients" :key="'ing-' + key">
        <p>{{ upperFirst(ingredient.name) }}</p>
        <p>80g</p>
      </Ingredient>
    </IngredientSection>


    <SectionTitle>
      <h2>Préparation:</h2>
    </SectionTitle>
    <TimesSection>
      <p>Total: {{ recipe.totalTime !== 0 ? parseTime(recipe.totalTime) : "-" }}</p>
      <p>Préparation: {{ recipe.preparationTime !== 0 ? parseTime(recipe.preparationTime) : "-" }}</p>
      <p>Repos: {{ recipe.restTime !== 0 ? parseTime(recipe.restTime) : "-" }}</p>
      <p>Cuisson: {{ recipe.cookingTime !== 0 ? parseTime(recipe.cookingTime) : "-" }}</p>
    </TimesSection>

    <SectionTitle>
      <h2>Étapes:</h2>
    </SectionTitle>
    <StepSection>
      <div v-for="(step,key) in recipe.steps" :key="'step-' + key">
        <h3>Étape {{ key + 1 }}</h3>
        <p>{{ step.description }}</p>
      </div>
    </StepSection>

  </Section>
</template>

<script>
import {mapState} from "vuex";
import {upperFirst, parseTime} from "@/lib/formatter";
import {
  RecipeImage,
  Section,
  IngredientSection,
  SectionTitle,
  TimesSection,
  RecipeTitle,
  Ingredient, StepSection
} from "@/styles/recipes/Recipe.style";

export default {
  name: "Recipe",
  components: {
    Section,
    RecipeImage,
    IngredientSection,
    SectionTitle,
    TimesSection,
    RecipeTitle,
    Ingredient,
    StepSection
  },
  computed: {
    ...mapState(['recipe'])
  },
  methods: {
    upperFirst,
    parseTime
  },
  created() {
    const token = sessionStorage.token;
    if (!token) {
      this.$router.push('/');
      return;
    }

    this.$store.dispatch("getRecipe", this.$route.params.id);
  },
  watch: {
    $route() {
      this.$store.dispatch("getRecipe", this.$route.params.id);
    }
  }
}
</script>