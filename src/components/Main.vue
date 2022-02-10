<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "Main",
  created() {
    if(sessionStorage.token){
      this.$store.dispatch('setToken', sessionStorage.token)
    }
  }
}
</script>
