<template>
  <div id="app">
    <Header v-if="$route.fullPath !== '/'"/>
    <Main/>
    <Footer v-if="$route.fullPath !== '/'"/>
  </div>
</template>

<script>

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Main,
    Header,
  }
}
</script>

<style>

a {
  text-decoration: none;
  color: #000
}

@font-face {
  font-family: "genshin";
  src: url("assets/ja-jp.ttf")
}

* {
  margin: 0;
  padding: 0;
  font-family: genshin, serif;
}

main {
  min-height: calc(100vh - 120px);
}
</style>

