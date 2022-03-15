<template>
        <Section>
            <Tableau>
                <thead>
                <Row>
                    <th>ID</th>
                    <th>name</th>
                    <th>preparationTime</th>
                    <th>cookingTime</th>
                    <th>restTime</th>
                    <th>totalTime</th>
                    <th>Image</th>
                    <th></th>
                    <th></th>
                </Row>
                </thead>
                <tbody>
                <Row v-for="(recipe,key) in userRecipes" :key="key">
                    <td>{{ recipe.id }}</td>
                    <td>{{ recipe.name }}</td>
                    <td>{{ recipe.preparationTime }}</td>
                    <td>{{ recipe.cookingTime }}</td>
                    <td>{{ recipe.restTime }}</td>
                    <td>{{ recipe.totalTime }}</td>
                    <td>{{ recipe.image }}</td>
                    <td>
                       <Button :color="color.orange"><router-link :to="{name: 'myRecipe-update', params: {id: recipe.id}}">Modifier</router-link></Button>
                    </td>
                    <td>
                        <Button :color="color.red" @click="onDelete(recipe)">Supprimer</Button>
                    </td>
                </Row>
                </tbody>
            </Tableau>
            <Button :color="color.blue"><router-link :to="{name: 'myRecipe-create'}"> Créer une recette</router-link></Button>
          <p>ATTENTION: Si create ou update, rafraichir pour voir les changements dans la liste mes recettes</p>
        </Section>
</template>

<script>
import {mapState} from "vuex";
import {Button, Row, Tableau, Section} from "@/styles/recipes/MyRecipes.style";
import color from "@/styles/theme";

export default {
    name: "MyRecipe",
  data(){
     return {
       color
     }
  },
  components: {
    Button,
    Row,
    Tableau,
    Section
  },
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
