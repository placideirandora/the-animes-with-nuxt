<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import { getData } from "nuxt-storage/local-storage";
import { mapMutations } from "vuex";
import Header from "./partials/Header";

export default {
  components: {
    Header,
  },
  data: () => ({
    route: null,
    routeChanged: false,
  }),
  methods: {
    ...mapMutations(["setAuthenticated"]),
    authenticateRoute() {
      const token = getData("nuxtAuthToken");

      if (token) {
        this.setAuthenticated(true);
      } else {
        switch (this.route) {
          case "comedy":
            this.$router.push("/login");
            break;
          case "action":
            this.$router.push("/login");
            break;
          case "love":
            this.$router.push("/login");
            break;
          case "horror":
            this.$router.push("/login");
            break;
          default:
            this.$router.push({ name: this.route });
        }
      }
    },
  },
  watch: {
    $route(to, from) {
      this.route = to.name;
      this.routeChanged = true;
      this.authenticateRoute();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  created() {
    if (!this.routeChanged) {
      this.route = this.$route.name;
      this.authenticateRoute();
    }
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
