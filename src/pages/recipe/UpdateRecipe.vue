<template>
  <div>
    <FormRecipe type="update"/>
  </div>
</template>

<script>

import FormRecipe from "@/components/Recipes/FormRecipe";

export default {
  name: "UpdateRecipe",
  components: {
    FormRecipe
  },
  computed: {
    recipe() {
      return this.$store.getters.getRecipe(this.$route.params.id);
    }
  }

}
</script>
