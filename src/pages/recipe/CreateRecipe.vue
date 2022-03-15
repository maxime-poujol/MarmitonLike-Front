<template>
  <div>
    <FormRecipeCreate type="create"/>
  </div>
</template>

<script>
import FormRecipeCreate from "@/components/Recipes/FormRecipeCreate";

export default {
  name: "createRecipe",
  components: {
    FormRecipeCreate
  }
}
</script>
