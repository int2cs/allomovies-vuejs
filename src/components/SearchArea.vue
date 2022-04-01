<template>
  <div class="searchArea">
    <form>
      <input type="search" placeholder="Rechercher..." />
      <input type="submit" value="Go !" />
    </form>
  </div>
</template>

<script></script>

<style scoped>
.searchArea {
  position: fixed;
  width: 100%;
  top: 80px;
  background: rgb(235, 32, 32);
  padding: 1em;
  z-index: 10;
  display: flex;
  justify-content: center;
}

form {
  width: 80%;
  margin: auto;
  text-align: center;
}

form input[type="search"] {
  font-size: 1.5em;
  padding: 0.3em;
  border-radius: 5px;
  width: 70%;
  border: none;
}
form input[type="search"]:focus {
  outline: none;
}
form input[type="submit"] {
  font-size: 1.5em;
  padding: 0.2em 0.8em;
  border: none;
  border-radius: 5px;
  color: white;
  background: rgb(36, 190, 41);
  margin-left: 20px;
}
</style>
