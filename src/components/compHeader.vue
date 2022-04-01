<template>
  <header class="header">
    <img src="assets/img/popcorn_logo.png" alt="logo" />
    <h1>AlloMovies</h1>

    <nav>
      <ul>
        <li><a href="/" class="active">Accueil</a></li>
        <li><a href="/favoris">Favoris</a></li>
      </ul>
    </nav>
  </header>
</template>

<script></script>

<style scoped>
@font-face {
  font-family: "bebasNeue";
  src: url("/assets/fonts/BebasNeue.otf");
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background: cadetblue;
  padding: 1em;
  z-index: 10;
}

img {
  height: 50px;
}

h1 {
  font-family: "bebasNeue";
  letter-spacing: 2px;
  color: rgb(170, 23, 23);
  filter: drop-shadow(3px 3px 1px whitesmoke);
  margin-left: 10px;
}

nav {
  margin-left: 30px;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}
</style>
