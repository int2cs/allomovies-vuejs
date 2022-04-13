<template>
  <button v-if="isInFavorits" class="btn add" @click.stop="addToFavorits">Ajouter au favoris</button>
  <button v-else class="btn remove" @click.stop="removeFromFavorits">Supprimer</button>
</template>

<script>
export default {
  props: ["movieID"],
  data() {
    return {
      favorisList: localStorage.favoris ? localStorage.favoris.split(",") : [],
    };
  },
  methods: {
    addToFavorits() {
      let localStore = localStorage.favoris ? localStorage.favoris.split(",") : [];
      if (!localStore.includes(this.movieID.toString())) {
        localStore.push(this.movieID.toString());
        this.favorisList = localStore;
        localStorage.favoris = localStore.join(",");
      }
    },
    removeFromFavorits() {
      let localStore = localStorage.favoris ? localStorage.favoris.split(",") : [];
      const index = localStore.indexOf(this.movieID.toString());
      if (localStore.includes(this.movieID.toString())) {
        localStore.splice(index, 1);
        this.favorisList = localStore;
        localStorage.favoris = localStore.join(",");
      }
    },
  },
  computed: {
    isInFavorits() {
      if (!this.favorisList.includes(this.movieID.toString())) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.btn {
  font-size: 0.8em;
  display: block;
  margin-left: auto;
  padding: 0.5em 1em;
  position: absolute;
  bottom: 30px;
  right: 30px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  transition: background 0.1s;
  cursor: pointer;
}

.btn.add {
  background: green;
}
.btn.add:hover {
  background: rgb(0, 100, 0);
}
.btn.remove {
  background: rgb(255, 57, 57);
}
.btn.remove:hover {
  background: rgb(190, 43, 43);
}
</style>
