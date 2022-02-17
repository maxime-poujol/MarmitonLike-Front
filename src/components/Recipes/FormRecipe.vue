<template>
  <FormContainer>
    <Form>
      <FieldContainer>
        <Field type="text" v-model="rname" name="rname" id="name" tabindex="1" autofocus/>
        <Field type="text" v-model="preparationTime" name="preparationTime" id="preparationTime" tabindex="2"/>
        <Field type="text" v-model="cookingTime" name="cookingTime" id="cookingTime" tabindex="3"/>
        <Field type="text" v-model="restTime" name="restTime" id="restTime" tabindex="4"/>
        <Field type="text" v-model="difficulty" name="difficulty" id="difficulty" tabindex="5"/>
        <Field type="text" v-model="image" name="image" id="image" tabindex="6"/>
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
