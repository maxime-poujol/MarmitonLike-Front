<template>
  <div>
    {{userRecipes}}
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
  }
}
</script>
