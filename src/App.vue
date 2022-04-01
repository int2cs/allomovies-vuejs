<template>
  <CompHeader></CompHeader>
  <SearchArea></SearchArea>

  <div class="moviesList">
    <CardMovie v-for="movie of movies" :key="movie.id" :dataMovie="movie"></CardMovie>
  </div>
</template>

<script>
import CompHeader from "./components/compHeader.vue";
import SearchArea from "./components/SearchArea.vue";
import CardMovie from "./components/CardMovie.vue";

export default {
  components: {
    CompHeader,
    SearchArea,
    CardMovie,
  },
  mounted() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=2a7bc3506d9e237e752a6e713962fea0&language=fr-Eu&page=1")
      .then((response) => response.json())
      .then((res) => {
        this.movies = res.results;
        console.log(res.results);
      });
  },
  data() {
    return {
      movies: [],
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
  padding: 0.5em 1em;
  border-radius: 10px;
}
a:hover {
  color: black !important;
  background: aliceblue;
}
a.active {
  color: white;
}

.moviesList {
  width: 80%;
  margin: 160px auto 0 auto;
}
</style>
