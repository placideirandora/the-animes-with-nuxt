<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from "./partials/Header";
import Footer from "./partials/Footer";

export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>

<style lang="scss">
html {
  font-family: "Roboto";
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #0d0221;

  &,
  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h3 {
  margin-bottom: 10px;
}

main {
  padding: 0 20em;
}
</style>
