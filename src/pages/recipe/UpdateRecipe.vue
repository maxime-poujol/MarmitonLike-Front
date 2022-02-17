<template>
  <div>
    <FormRecipe/>
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
