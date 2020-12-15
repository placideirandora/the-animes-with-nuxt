<template>
  <header>
    <h3 class="logo"><nuxt-link to="/">The Animes</nuxt-link></h3>
    <ul>
      <li><nuxt-link to="/action">Action</nuxt-link></li>
      <li><nuxt-link to="/love">Love</nuxt-link></li>
      <li><nuxt-link to="/comedy">Comedy</nuxt-link></li>
      <li><nuxt-link to="/horror">Horror</nuxt-link></li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
  background: #386fa4;
  color: #fff;
  width: 100%;
  height: 5em;
  padding: 0 20em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;

  h3.logo {
    font-size: 1.8em;
    font-weight: 300;
    text-transform: uppercase;
    padding-top: 15px;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;

    li {
      &,
      a {
        padding: 1em;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      &:hover {
        border-bottom: solid 1px #fff;
        transition: all 0.2s ease-in-out;
      }
    }
  }
}
</style>