<template>
  <FormContainer>
    <Form>
      <FieldContainer>
        <Field id="name" v-model="rname" autofocus name="rname" tabindex="1" type="text"/>
        <Field id="preparationTime" v-model="preparationTime" name="preparationTime" tabindex="2" type="text"/>
        <Field id="cookingTime" v-model="cookingTime" name="cookingTime" tabindex="3" type="text"/>
        <Field id="restTime" v-model="restTime" name="restTime" tabindex="4" type="text"/>
        <Field id="difficulty" v-model="difficulty" name="difficulty" tabindex="5" type="text"/>
        <Field id="image" v-model="image" name="image" tabindex="6" type="text"/>
        <button type="submit">button</button>
      </FieldContainer>
    </Form>
  </FormContainer>
</template>

<script>
import {Field, FieldContainer, Form} from "@/styles/Home/Form.style";
import {FormContainer} from '@/styles/recipes/FormRecipe.style'

export default {
  name: "FormRecipe",
  data() {
    return {
      rname: "",
      preparationTime: "",
      cookingTime: "",
      restTime: "",
      difficulty: "",
      image: ""
    }
  },
  components: {
    Form,
    FieldContainer,
    Field,
    FormContainer
  }
}
</script>
