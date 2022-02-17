<template>
  <div>
    <section>
      <router-link :to="{name: 'myRecipe-create'}"> Create a recipe </router-link>
    </section>
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
            <router-link :to="{name: 'myRecipe-update', params: {id: recipe.id}}">Modifier</router-link>
          </td>
          <td>
            <button @click="onDelete(recipe)">Supprimer</button>
          </td>
        </tr>
        </tbody>
      </table>
    </section>
  </div>


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
  },
  methods: {
    onDelete(recipe) {
      if (confirm('Etes-vous sur de vouloir supprimer cette recette ?')) {
        this.$router.push({name: "myRecipe-delete", params: {id: recipe.id}});
      }

    }
  }
}
</script>
