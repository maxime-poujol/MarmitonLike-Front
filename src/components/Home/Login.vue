<template>
  <LoginContainer>
    <TitleContainer>
      <Title>Connexion</Title>
    </TitleContainer>

    <Form @submit="onSubmit">
      <FieldContainer>
        <Field id="email" v-model="email" name="email" placeholder="Email" type="email"/>
        <Field id="password" v-model="password" name="password" placeholder="Mot de passe" type="password"/>
      </FieldContainer>
      <Submit type="submit" value="Se connecter"/>
    </Form>
    <p>{{ error }}</p>
  </LoginContainer>
</template>

<script>
import {Field, FieldContainer, Form, LoginContainer, Submit, Title, TitleContainer} from "@/styles/Home/Form.style";

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
      this.$router.push("Recipes")
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      })
    }
  }
}
</script>
