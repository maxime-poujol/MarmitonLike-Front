<template>
  <RegisterContainer>
    <TitleContainer>
      <Title>Créer un compte</Title>
    </TitleContainer>

    <Form @submit="onSubmit">
      <FieldContainer>
        <Field v-model="email" type="email" name="email" id="email" placeholder="email"/>
        <Field v-model="password" type="password" name="password" id="password" placeholder="password"/>
        <Field v-model="passwordConfirm" type="password" name="password" id="passwordConfirm" placeholder="password"/>
      </FieldContainer>
      <Submit type="submit" value="Créer mon compte"/>
    </Form>
    <p>{{error}}</p>
  </RegisterContainer>

</template>

<script>
import {RegisterContainer, Form, FieldContainer, Field, Submit, Title, TitleContainer} from "@/styles/Home/Form.style";

export default {
  name: "Register",
  components: {
    RegisterContainer,
    Form,
    Field,
    Submit,
    Title,
    TitleContainer,
    FieldContainer
  },
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
      error: ""
    }
  },
}
</script>
