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
        <p>{{ ingredient.quantite }}</p>
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
import {parseTime, upperFirst} from "@/lib/formatter";
import {
  Ingredient,
  IngredientSection,
  RecipeImage,
  RecipeTitle,
  Section,
  SectionTitle,
  StepSection,
  TimesSection
} from "@/styles/recipes/Recipe.style";

export default {
  name: "Recipe",
  computed: {
    recipe() {
      return this.$store.getters.getRecipe(this.$route.params.id)
    }
  },
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
  methods: {
    upperFirst,
    parseTime
  },
  created() {
    const token = sessionStorage.token;
    if (!token) {
      this.$router.push('/');
    }
  }
}
</script>