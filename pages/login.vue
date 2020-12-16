<template>
  <main class="container">
    <h2 class="heading">LOGIN</h2>
    <form @submit.prevent="onSubmit">
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

      <button type="submit">Login</button>
    </form>
  </main>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  head() {
    return {
      title: "Login",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "A page where a user can authenticate themselves",
        },
      ],
    };
  },
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    ...mapMutations(["setAuthenticated"]),
    onSubmit() {
      this.setAuthenticated(true);
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