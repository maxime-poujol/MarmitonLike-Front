<template>
  <FormContainer>
    <Form>
      <FieldContainer>
        <FormRow>
          <label for="name">Name</label>
          <Field id="name" v-model="rname" autofocus name="rname" tabindex="1" type="text"/>
        </FormRow>
        <FormRow>
          <label for="preparationTime">Preparation</label>
          <Field id="preparationTime" v-model="preparationTime" name="preparationTime" tabindex="2" type="text"/>
        </FormRow>
        <FormRow>
          <label for="cookingTime">Cooking</label>
          <Field id="cookingTime" v-model="cookingTime" name="cookingTime" tabindex="3" type="text"/>
        </FormRow>
        <FormRow>
          <label for="restTime">Rest</label>
          <Field id="restTime" v-model="restTime" name="restTime" tabindex="4" type="text"/>
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
            <IngredientRow id="ingredients-row"></IngredientRow>
            <div>
              <button type="button" @click="createIngredientRow()">PLUS</button>
            </div>
          </FormGroup>
        </FormRow>

        <Submit type="submit" value="button"/>

      </FieldContainer>
    </Form>
  </FormContainer>
</template>

<script>
import {Field, FieldContainer, Form, Submit} from "@/styles/Home/Form.style";
import {FormContainer, FormGroup, FormRow, IngredientRow} from '@/styles/recipes/FormRecipe.style'

export default {
  name: "FormRecipe",
  data() {
    return {
      rname: "",
      preparationTime: "",
      cookingTime: "",
      restTime: "",
      difficulty: "",
      image: "",
    }
  },
  components: {
    Form,
    FieldContainer,
    Field,
    FormContainer,
    FormRow,
    Submit,
    IngredientRow,
    FormGroup
  },
  mounted() {
    this.createIngredientRow()
  },
  methods: {
    createIngredientRow() {
      const div = document.getElementById("ingredients-row");

      const row = document.createElement("div");
      const nameInput = document.createElement("input");
      const qteInput = document.createElement("input");
      row.appendChild(nameInput);
      row.appendChild(qteInput);

      div.appendChild(row);
    }
  }
}
</script>
