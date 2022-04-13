<template>
  <div v-if="movies.length" class="moviesList">
    <CardMovie v-for="movie of movies" :key="movie.id" :dataMovie="movie" @click="selectedMovie = movie.id"></CardMovie>
  </div>
  <p v-else class="moviesList">Aucun favoris trouvé !</p>
</template>

<script>
import CardMovie from "../components/CardMovie.vue";

export default {
  components: { CardMovie },
  data() {
    return {
      localStore: localStorage.favoris ? localStorage.favoris.split(",") : [],
      movies: [],
    };
  },
  mounted() {
    this.localStore.forEach((ID) => {
      fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=2a7bc3506d9e237e752a6e713962fea0&language=fr-FR`)
        .then((response) => response.json())
        .then((res) => this.movies.push(res));
    });
  },
};
</script>

<style scoped>
h1 {
  margin-top: 160px;
}
</style>
