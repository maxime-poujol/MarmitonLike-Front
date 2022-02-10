<template>
  <RegisterContainer>
    <TitleContainer>
      <Title>Créer un compte</Title>
    </TitleContainer>

    <Form @submit="onSubmit">
      <FieldContainer>
        <Field v-model="username" type="text" name="username" id="username" placeholder="Nom utilisateur"/>
        <Field v-model="email" type="email" name="email" id="email_register" placeholder="Email"/>
        <Field v-model="password" type="password" name="password" id="password_register" placeholder="Mot de passe"/>
        <Field v-model="passwordConfirm" type="password" name="password" id="passwordConfirm" placeholder="Confirmer mot de passe"/>
      </FieldContainer>
      <Submit type="submit" value="Créer mon compte"/>
    </Form>
    <p>{{error}}</p>
  </RegisterContainer>

</template>

<script>
import {RegisterContainer, Form, FieldContainer, Field, Submit, Title, TitleContainer} from "@/styles/Home/Form.style";
import axios from "axios";
import ip from "@/config/adress";

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
      username:"",
      email: "",
      password: "",
      passwordConfirm: "",
      error: ""
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if(this.password === this.passwordConfirm){
        axios.post(`${ip}/user`, {
          username: this.username,
          email: this.email,
          password: this.password
        }).then(r => {
          sessionStorage.token = r.data;
          axios.post(`${ip}/login`, {
            email: this.email,
            password: this.password
          }).then((res) => {
            sessionStorage.token = res.data;
            this.$router.push("recepies");
          })
        }).catch(() => {
          this.error = "Mauvais profil/mdp";
        })
      }
    }
  }
}
</script>
