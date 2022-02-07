<template>
  <LoginContainer>
    <TitleContainer>
      <Title>Connexion</Title>
    </TitleContainer>

    <Form @submit="onSubmit">
      <FieldContainer>
        <Field v-model="email" type="email" name="email" id="email" placeholder="email"/>
        <Field v-model="password" type="password" name="password" id="password" placeholder="password"/>
      </FieldContainer>
      <Submit type="submit" value="Se connecter"/>
    </Form>
    <p>{{error}}</p>
  </LoginContainer>
</template>

<script>
import {LoginContainer, Form, FieldContainer, Field, Submit, Title, TitleContainer} from "@/styles/Home/Form.style";
import axios from 'axios';
import ip from "@/config/adress";

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
      axios.post(`${ip}/login`, {
        email: this.email,
        password: this.password
      }).then(r => {
        sessionStorage.token = r.data;
        this.$router.push("recepies");
      }).catch(() => {
        this.error = "Mauvais profil/mdp";
      })
    }
  }
}
</script>
