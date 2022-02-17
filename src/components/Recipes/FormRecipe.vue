<template>
  <Form>
    <input type="text" name="name" id="name">
    <input type="text" name="preparationTime" id="preparationTime">
    <input type="text" name="cookingTime" id="cookingTime">
    <input type="text" name="restTime" id="restTime">
    <input type="text" name="difficulty" id="difficulty">
    <input type="text" name="image" id="image">
  </Form>
</template>

<script>
import {Form} from "@/styles/Home/Form.style";

export default {
  name: "FormRecipe",
  components: {
    Form
  }
}
</script>
