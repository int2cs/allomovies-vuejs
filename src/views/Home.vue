<template>
  <SearchArea @validatingSearch="searching"></SearchArea>

  <div v-if="movies.length" class="moviesList">
    <CardMovie v-for="movie of movies" :key="movie.id" :dataMovie="movie" @click="clickMovie(movie.id)"></CardMovie>
  </div>
  <p v-else class="moviesList">Aucun film trouvé !</p>

  <Panel v-if="selectedMovie" :movieID="selectedMovie" />
</template>

<script>
import SearchArea from "../components/SearchArea.vue";
import CardMovie from "../components/CardMovie.vue";
import Panel from "../components/Panel.vue";

export default {
  components: {
    SearchArea,
    CardMovie,
    Panel,
  },
  mounted() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=2a7bc3506d9e237e752a6e713962fea0&language=fr-Eu&page=1")
      .then((response) => response.json())
      .then((res) => this.movies = res.results);
  },
  data() {
    return {
      movies: [],
      selectedMovie: null,
    };
  },
  methods: {
    searching(param) {
      if (param !== "") {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=2a7bc3506d9e237e752a6e713962fea0&language=fr-FR&query=${param}&page=1&include_adult=true`)
          .then((response) => response.json())
          .then((res) => this.movies = res.results);
      }
    },
    clickMovie(id) {
      this.selectedMovie = id;
      const panel = document.querySelector(".panel");
      if (panel && panel.classList.contains("notVisible")) {
        panel.classList.remove("notVisible");
      }
    },
  },
};
</script>
