<template>
  <main class="container">
    <h2 class="heading">REGISTRATION</h2>
    <form @submit.prevent="onSubmit">
      <div class="field-label-container">
        <label>First Name</label>
        <br />
        <input type="text" name="first-name" v-model="firstName" required />
      </div>

      <div class="field-label-container">
        <label>Last Name</label>
        <br />
        <input type="text" name="last-name" v-model="lastName" required />
      </div>

      <div class="field-label-container">
        <label>Username</label>
        <br />
        <input type="text" name="username" v-model="username" required />
      </div>

      <div class="field-label-container">
        <label>Email</label>
        <br />
        <input type="email" name="email" v-model="email" required />
      </div>

      <div class="field-label-container">
        <label>Password</label>
        <br />
        <input type="password" name="password" v-model="password" required />
      </div>

      <button type="submit">Register</button>
    </form>
  </main>
</template>

<script>
import { mapMutations } from "vuex";
import { setData } from "nuxt-storage/local-storage";

export default {
  head() {
    return {
      title: "Register",
    };
  },
  data: () => ({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  }),
  methods: {
    ...mapMutations(["setAuthenticated"]),
    onSubmit() {
      setData("nuxtAuthToken", "the animes - auth token!", 30, "d");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .heading {
    margin-bottom: 2rem;
  }

  .field-label-container {
    margin-bottom: 1rem;

    input {
      padding: 0.5rem;
      width: 20rem;
      outline: none;
    }
  }

  button {
    padding: 0.5rem;
    cursor: pointer;
  }
}
</style>