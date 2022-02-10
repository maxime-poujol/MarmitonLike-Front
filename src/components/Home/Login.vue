<template>
  <LoginContainer>
    <TitleContainer>
      <Title>Connexion</Title>
    </TitleContainer>

    <Form @submit="onSubmit">
      <FieldContainer>
        <Field v-model="email" type="email" name="email" id="email" placeholder="Email"/>
        <Field v-model="password" type="password" name="password" id="password" placeholder="Mot de passe"/>
      </FieldContainer>
      <Submit type="submit" value="Se connecter"/>
    </Form>
    <p>{{error}}</p>
  </LoginContainer>
</template>

<script>
import {LoginContainer, Form, FieldContainer, Field, Submit, Title, TitleContainer} from "@/styles/Home/Form.style";
import axios from 'axios';

export default {
  name: "Login",
  components: {
    LoginContainer,
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
      error: ""
    }
  },
  created() {
    if (sessionStorage.token) {
      this.$router.push("recepies")
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
        this.$store.dispatch('login')
    }
  }
}
</script>
