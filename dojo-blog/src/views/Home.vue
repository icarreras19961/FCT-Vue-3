<template>
  <div class="home">
    <h1>home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  <button @click="handleClick">Stop watch</button>
  </div>
  <router-link to="homeView">HomView</router-link>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";

export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref(["ivan", "pepe", "tomcio"]);

    //se disparara cada vez que haya un cambio
    const stopWatch = watch(search, () => {
      console.log("watch control");
    });
    const stopEffect = watchEffect(() => {
      console.log("watch control");
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    return {
      names,
      search,
      matchingNames,
    };
  },
};
</script>

<style></style>
