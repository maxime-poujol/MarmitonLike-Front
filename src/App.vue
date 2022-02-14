<template>
  <div id="app">
    <Header v-if="$route.fullPath !== '/'" />
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
  html {
    min-height: 100vh;
    background: linear-gradient(90deg, rgba(0,0,255,1) 33%, rgba(255,255,255,1) 33%, rgba(255,255,255,1) 66%, rgba(255,0,0,1) 66%);
  }

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
    font-family: genshin,serif;
  }
</style>

