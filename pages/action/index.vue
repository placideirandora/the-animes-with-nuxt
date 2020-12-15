<template>
  <div>
    <main>
      <article>
        <div v-if="loading">
          <p>Loading...</p>
        </div>
        <div v-if="!animes.length && !loading && !fetchError">
          <p class="fetch-error">No animes so far</p>
        </div>
        <div v-if="!animes.length && !loading && fetchError">
          <p>Could not fetch animes. Check your internet.</p>
        </div>
        <div v-if="animes.length && !loading">
          <div v-for="anime in animes" :key="anime.id" class="anime-article">
            <p class="anime-title">
              {{
                anime.attributes.titles.en
                  ? anime.attributes.titles.en
                  : anime.attributes.titles.en_jp
                  ? anime.attributes.titles.en_jp
                  : anime.attributes.titles.en_cn
              }}
            </p>
            <img
              :src="anime.attributes.posterImage.medium"
              alt="article cover"
              class="anime-cover"
            />
            <br />
            <small>{{
              anime.attributes.synopsis
                ? anime.attributes.synopsis
                : "No content"
            }}</small>
            <br />
            <br />
            <button @click="onViewAnime(anime.id)" class="details-button">
              Read full Anime details
            </button>
            <br />
          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  head() {
    return {
      title: "Action",
    };
  },
  computed: {
    ...mapGetters(["loading", "animes", "fetchError"]),
  },
  methods: {
    ...mapActions(["fetchAnimes"]),
    formatDate(date) {
      return moment(date).format("MMM DD, YYYY");
    },
    onViewAnime(id) {
      this.$router.push(`/action/${id}`);
    },
  },
  created() {
    // Fetch Animes
    this.fetchAnimes("action");
  },
};
</script>

<style lang="scss" scoped>
main {
  article {
    padding-bottom: 5rem;

    .fetch-error {
      color: red;
    }

    .anime-article {
      margin-bottom: 1.5rem;
    }

    .anime-title {
      padding: 10px 0;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .details-button {
      cursor: pointer;
    }

    .anime-cover {
      width: 25%;
      height: 20rem;
    }
  }

  h3 {
    text-transform: uppercase;
  }
}
</style>
