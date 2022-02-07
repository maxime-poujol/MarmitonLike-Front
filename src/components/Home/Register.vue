<template>
  <div>
    <form>
      <!-- Ici je relie mes input aux données de mon composant avec un v-model -->
      <div>
        <input id="userMail" v-model="username" type="email" name="email" required>
        <label for="userMail">E-mail</label>
      </div>
      <div>
        <input id="username" v-model="username" type="text" name="username">
        <label for="username"></label>

        <input id="lastname" v-model="lastname" class="form-control" placeholder="Nom" required type="text"/>
        <label for="lastname">Nom</label>
      </div>
      <div class="form-floating my-2">
        <input id="subject" v-model="subject" class="form-control" placeholder="Sujet de la demande" required
               type="text"/>
        <label for="subject">Sujet de la demande </label>
      </div>
      <div class="form-floating my-2">
        <textarea id="message" v-model="content" class="form-control" placeholder="Message" required></textarea>
        <label for="message">Message</label>
      </div>
      <div class="text-center">
        <button class="btn btn-primary" type="submit" @click="submitForm">Soumettre</button>
      </div>
    </form>





    <input id="password" type="password" name="password">
    <label for="password"></label>



  </div>
</template>

<script>
export default {
  name: "Register"
}
</script>
