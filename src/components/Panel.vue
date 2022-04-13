<template>
  <div class="panel" @click="deletePanel">
    <h2>{{ movie.title ? movie.title : "Aucun titre !" }}</h2>
    <img
      :src="movie.poster_path ? getUrl(movie.poster_path) : './assets/img/movie_poster.jpg'"
      :alt="`Affiche du film ${movie.title ? movie.title : 'inconnue'}`"
    />
    <span>Date de sortie : {{ movie.release_date ? movie.release_date : "Aucune date de sortie" }}</span>
    <span>Note de {{ movie.vote_average }}/10</span>

    <ul>
      <li v-for="genre of movie.genres" :key="genre.id">{{ genre.name }}</li>
    </ul>

    <p>{{ movie.overview ? movie.overview : "Aucune déscription ..." }}</p>
  </div>
</template>

<script>
export default {
  props: ["movieID"],
  data() {
    return {
      movie: {},
    };
  },
  mounted() {
    fetch(`https://api.themoviedb.org/3/movie/${this.movieID}?api_key=2a7bc3506d9e237e752a6e713962fea0&language=fr-FR`)
      .then((response) => response.json())
      .then((res) => (this.movie = res));
  },
  updated() {
    fetch(`https://api.themoviedb.org/3/movie/${this.movieID}?api_key=2a7bc3506d9e237e752a6e713962fea0&language=fr-FR`)
      .then((response) => response.json())
      .then((res) => (this.movie = res));
  },
  methods: {
    getUrl(url) {
      return `https://image.tmdb.org/t/p/w500${url}`;
    },
    deletePanel() {
      const panel = document.querySelector(".panel");
      panel.classList.add("notVisible");
    },
  },
};
</script>

<style scoped>
.panel {
  max-width: 500px;
  padding-right: 1em;
  position: fixed;
  top: 160px;
  right: 0;
}

img {
  width: 50%;
  float: left;
  margin: 1em 1em 1em 0;
}
span {
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 1em 0;
}

.ico.star {
  color: yellow;
  filter: drop-shadow(0 0 1px black);
}

ul {
  list-style: none;
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
}

li {
  padding: 0.2em;
  border-radius: 3px;
  color: white;
  background: rgb(255, 79, 79);
  box-shadow: 1px 1px 5px grey;
}
p {
  clear: both;
  text-align: justify;
  font-size: 1.1em;
}
</style>
