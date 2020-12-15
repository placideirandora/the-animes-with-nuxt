import axios from "axios";

export const state = () => ({
  loading: false,
  animes: [],
  anime: null,
  fetchError: false
});

export const getters = {
  animes: state => state.animes,
  anime: state => state.anime,
  fetchError: state => state.fetchError,
  loading: state => state.loading
};

export const mutations = {
  setLoading: (state, payload) => {
    state.loading = payload;
  },

  setAnimes: (state, payload) => {
    state.animes = payload;
  },

  setAnime: (state, payload) => {
    state.anime = payload;
  },

  setFetchError: (state, payload) => {
    state.fetchError = payload;
  }
};

export const actions = {
  fetchAnimes: async ({ commit }, type) => {
    return new Promise(async (resolve, reject) => {
      try {
        commit("setLoading", true);
        let res;

        // Fetch Animes

        if (!type) {
          res = await axios.get("https://kitsu.io/api/edge/anime");
        } else {
          res = await axios.get(
            `https://kitsu.io/api/edge/anime?filter[categories]=${type}`
          );
        }

        commit("setAnimes", res.data.data);
        commit("setLoading", false);
        resolve(true);
      } catch (error) {
        commit("setLoading", false);
        reject("Could not fetch animes");
      }
    });
  },

  fetchAnime: async ({ commit }, id) => {
    return new Promise(async (resolve, reject) => {
      try {
        commit("setLoading", true);

        // Fetch Anime

        const res = await axios.get(`https://kitsu.io/api/edge/anime/${id}`);

        commit("setAnime", res.data.data);
        commit("setLoading", false);
        resolve(true);
      } catch (error) {
        commit("setLoading", false);
        reject("Could not fetch the anime");
      }
    });
  }
};
