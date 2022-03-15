<template>
  <RegisterContainer>
    <TitleContainer>
      <Title>Créer un compte</Title>
    </TitleContainer>

    <Form @submit="onSubmit">
      <FieldContainer>
        <Field id="username_register" v-model="username" name="username" placeholder="Nom utilisateur" type="text"/>
        <Field id="email_register" v-model="email" name="email" placeholder="Email" type="email"/>
        <Field id="password_register" v-model="password" name="password" placeholder="Mot de passe" type="password"/>
        <Field id="passwordConfirm_register" v-model="passwordConfirm" name="password"
               placeholder="Confirmer mot de passe"
               type="password"/>
      </FieldContainer>
      <Submit type="submit" value="Créer mon compte"/>
    </Form>
    <p>{{ error }}</p>
  </RegisterContainer>

</template>

<script>
import {Field, FieldContainer, Form, RegisterContainer, Submit, Title, TitleContainer} from "@/styles/Home/Form.style";
import axios from "axios";

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
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      error: ""
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.password === this.passwordConfirm) {
        axios.post(`${process.env.VUE_APP_IP}/user`, {
          username: this.username,
          email: this.email,
          password: this.password
        }).then(r => {
          sessionStorage.token = r.data;
          axios.post(`${process.env.VUE_APP_IP}/login`, {
            email: this.email,
            password: this.password
          }).then((res) => {
            sessionStorage.token = res.data;
            this.$router.push("Recipes");
          })
        }).catch((err) => {
          this.error = err;
          //this.error = "Mauvais profil/mdp";
        })
      }
    }
  }
}
</script>
