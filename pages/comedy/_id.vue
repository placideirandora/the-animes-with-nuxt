<template>
  <div>
    <main>
      <article>
        <div v-if="loading">
          <p>Loading...</p>
        </div>
        <div v-if="!animes && !loading && fetchError">
          <p>Could not fetch the anime. Check your internet.</p>
        </div>
        <div v-if="anime && !loading">
          <div class="anime-article">
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
              :src="anime.attributes.posterImage.large"
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
            <p>Average Rating: {{ anime.attributes.averageRating }}</p>
            <br />
            <p>Start Date: {{ anime.attributes.startDate }}</p>
            <br />
            <p>End Date: {{ anime.attributes.endDate }}</p>
            <br />
            <p>Status: {{ anime.attributes.status }}</p>
            <br />
            <p>Episodes: {{ anime.attributes.episodeCount }}</p>
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
      title: this.animeTitle,
    };
  },
  data: () => ({
    animeTitle: "Loading",
  }),
  computed: {
    ...mapGetters(["loading", "anime", "fetchError"]),
  },
  methods: {
    ...mapActions(["fetchAnime"]),
  },
  created() {
    // Fetch Animes
    this.fetchAnime(this.$route.params.id).then((res) => {
      if (this.anime.attributes.titles.en) {
        this.animeTitle = this.anime.attributes.titles.en;
      } else if (this.anime.attributes.titles.en_jp) {
        this.animeTitle = this.anime.attributes.titles.en_jp;
      } else if (this.anime.attributes.titles.en_cn) {
        this.animeTitle = this.anime.attributes.titles.en_cn;
      } else {
        this.animeTitle = "No English Title";
      }
    });
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

      &:hover {
        cursor: pointer;
      }
    }

    .anime-cover {
      width: 40%;
      height: 25rem;
    }
  }

  h3 {
    text-transform: uppercase;
  }
}
</style>
