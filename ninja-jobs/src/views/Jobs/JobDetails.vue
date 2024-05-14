<template>
  <div v-if="job">
    <h1>Jobs details</h1>
    <h2>{{ job.title }}</h2>
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <h2>Not job Found</h2>
    <router-link to="/">Home</router-link>
  </div>
</template>
<script>
export default {
  // props:[id],
  // Como acepta props no hace falta el router.params
  data() {
    return {
      //Los parametros del router enviado
      id: this.$route.params.id,
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style></style>
