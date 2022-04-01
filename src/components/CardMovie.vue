<template>
  <img :src="getUrl(dataMovie.poster_path)" alt="image" />
  <h3>{{ dataMovie.title }}</h3>
</template>

<script>
export default {
  props: ["dataMovie"],
  methods: {
    getUrl(url) {
      return `https://image.tmdb.org/t/p/w500${url}`;
    },
  },
};
</script>

<style scoped></style>
