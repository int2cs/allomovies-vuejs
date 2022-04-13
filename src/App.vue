<template>
  <CompHeader />

  <router-view />
</template>

<script>
import CompHeader from "./components/compHeader.vue";

export default {
  components: {
    CompHeader,
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
a.router-link-active {
  color: white;
}

.moviesList {
  max-width: 935px;
  margin: 160px 0 0 20px;
  display: flex;
  justify-content: start;
  gap: 10px;
  flex-wrap: wrap;
}

.notVisible {
  visibility: hidden;
}
</style>
