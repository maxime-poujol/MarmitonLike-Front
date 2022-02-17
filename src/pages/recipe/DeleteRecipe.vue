<template>
  <div>
    <div>Votre a bien été supprimée</div>
    <p>Redirection dans {{ timer }}s</p>
  </div>

</template>

<script>
export default {
  name: "DeleteRecipe",
  data() {
    return {
      timer: 5
    }

  },
  created() {
    const interval = setInterval(this.decrementTimer, 1000);

    setTimeout(() => this.redirect(interval), 5000);
  },
  methods: {
    decrementTimer() {
      this.timer--;
    },
    redirect(interval) {
      clearInterval(interval);
      this.$router.push({name: "myRecipe"});
    }
  }
}
</script>
