<template>
  <FormContainer>
    <Form method="post" @submit="onSubmit($event)">
      <input v-if="type === 'update'" type="hidden" name="bddId" :value="bddId">
      <FieldContainer>
        <FormRow>
          <label for="name">Name</label>
          <Field id="name" v-model="name" autofocus name="name" tabindex="1" type="text"/>
        </FormRow>
        <FormRow>
          <label for="preparationTime">Preparation (min)</label>
          <Field id="preparationTime" v-model="preparationTime" name="preparationTime" tabindex="2"
                 type="number"/>
        </FormRow>
        <FormRow>
          <label for="cookingTime">Cooking (min)</label>
          <Field id="cookingTime" v-model="cookingTime" name="cookingTime" tabindex="3" type="number"/>
        </FormRow>
        <FormRow>
          <label for="restTime">Rest (min)</label>
          <Field id="restTime" v-model="restTime" name="restTime" tabindex="4" type="number"/>
        </FormRow>
        <FormRow>
          <label for="difficulty">Difficulty</label>
          <Field id="difficulty" v-model="difficulty" name="difficulty" tabindex="5" type="text"/>
        </FormRow>
        <FormRow>
          <label for="image">Image</label>
          <Field id="image" v-model="image" name="image" tabindex="6" type="text"/>
        </FormRow>
        <FormRow>
          <label>Ingredients</label>
          <FormGroup>
            <IngredientRow id="ingredients-row" v-for="(ingredient,key) in ingredients" :key="key">
                <input type="text" v-model="ingredient.name">
                <input type="text" v-model="ingredient.qte">
                <Button color="#ff0000" v-if="ingredients.length !== 1" type="button" @click="suppressIngredient(key)">
                  X
                </Button>
            </IngredientRow>
            <PlusContainer>
              <Button color="#00aaff" type="button" @click="createIngredientRow()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
              </svg>
              </Button>
            </PlusContainer>
          </FormGroup>
        </FormRow>
        <FormRow>
          <label>Steps</label>
          <StepArea rows="5" cols="30" v-model="steps"></StepArea>
        </FormRow>

        <Submit type="submit" value="button"/>

      </FieldContainer>
    </Form>
  </FormContainer>

</template>

<script>
import {Field, FieldContainer, Form, Submit} from "@/styles/Home/Form.style";
import {FormContainer, FormGroup, FormRow, IngredientRow, Button, StepArea, PlusContainer} from '@/styles/recipes/FormRecipe.style'

export default {
  name: "FormRecipeCreate",
  props: ['type'],
  data() {
    return {
      name: "",
      preparationTime: 0,
      cookingTime: 0,
      restTime: 0,
      difficulty: "",
      image: "",
      ingredients: [],
      steps: "",
      bddId: "",
    }
  },
  components: {
    Button,
    Form,
    FieldContainer,
    Field,
    FormContainer,
    FormRow,
    Submit,
    IngredientRow,
    FormGroup,
    StepArea,
    PlusContainer
  },
  mounted() {
    if (this.type === "create") {
      this.createIngredientRow();
    } else if (this.type === "update") {
      const recipe = this.$store.getters.getUserRecipe(this.$route.params.id);
      this.name = recipe.name;
      this.preparationTime = parseInt(recipe.preparationTime);
      this.cookingTime = parseInt(recipe.cookingTime);
      this.restTime = parseInt(recipe.restTime);
      this.difficulty = recipe.difficulty;
      this.ingredients = JSON.parse(recipe.ingredients);
      this.steps = recipe.steps;
      this.bddId = recipe._id;
    }

  },
  methods: {
    createIngredientRow() {
      this.ingredients.push({
        name: "",
        qte: ""
      })
    },
    suppressIngredient(index) {
      this.ingredients.splice(index, 1);
    },
    onSubmit(event) {
      event.preventDefault();

      if (this.type === "create") {
        this.$store.dispatch("createRecipe", this.$data);
      } else if (this.type === "update") {
        this.$store.dispatch("updateRecipe", {
          data: this.$data,
          id: this.$route.params.id
        });
      }

      this.$router.push("/myrecipe");

    }
  }
}
</script>
