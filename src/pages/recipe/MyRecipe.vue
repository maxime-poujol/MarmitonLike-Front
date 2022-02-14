<template>
  <section>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>name</th>
        <th>preparationTime</th>
        <th>cookingTime</th>
        <th>restTime</th>
        <th>totalTime</th>
        <th>Image</th>
        <th></th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(recipe,key) in userRecipes" :key="key">
        <td>{{recipe.id}}</td>
        <td>{{recipe.name}}</td>
        <td>{{recipe.preparationTime}}</td>
        <td>{{recipe.cookingTime}}</td>
        <td>{{recipe.restTime}}</td>
        <td>{{recipe.totalTime}}</td>
        <td>{{recipe.image}}</td>
        <td>
          <router-link :to="'/myrecipes/update/' + recipe.id">Modifier</router-link>
        </td>
        <td>
          <router-link :to="'/myrecipes/delete' + recipe.id">Supprimer</router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </section>

</template>

<script>
import {mapState} from "vuex";

export default {
  name: "MyRecipe",
  computed: {
    ...mapState(['userRecipes'])
  },
  created() {
    this.$store.dispatch("getUserRecipes");
  }
}
</script>
