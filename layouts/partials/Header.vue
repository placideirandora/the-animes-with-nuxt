<template>
  <header>
    <p class="logo"><nuxt-link to="/">The Animes</nuxt-link></p>
    <ul v-if="authenticated">
      <li><nuxt-link to="/action">Action</nuxt-link></li>
      <li><nuxt-link to="/love">Love</nuxt-link></li>
      <li><nuxt-link to="/comedy">Comedy</nuxt-link></li>
      <li><nuxt-link to="/horror">Horror</nuxt-link></li>
      <li><a href @click="onLogout">Logout</a></li>
    </ul>
    <ul v-if="!authenticated">
      <li><nuxt-link to="/login">Login</nuxt-link></li>
      <li class="register-btn">
        <nuxt-link to="/register">Register</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { removeItem } from "nuxt-storage/local-storage";

export default {
  computed: {
    ...mapGetters(["authenticated"]),
  },
  methods: {
    ...mapMutations(["setAuthenticated"]),
    onLogout() {
      removeItem("nuxtAuthToken");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
header {
  background: #02aab0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #00cdac,
    #02aab0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #00cdac,
    #02aab0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: #fff;
  width: 100%;
  height: 5em;
  padding: 0 20em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;

  .logo {
    font-size: x-large;
    font-weight: 300;
    text-transform: uppercase;
    padding-top: 8px;

    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;

    li {
      margin: 5px;

      &,
      a {
        padding: 0.8rem;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    }

    .register-btn {
      border: 1px solid #fff;
      border-radius: 5px;
    }
  }
}
</style>