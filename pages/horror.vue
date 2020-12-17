<template>
  <nuxt-child />
</template>

<script>
export default {
  middleware: "authenticate",
};
</script>