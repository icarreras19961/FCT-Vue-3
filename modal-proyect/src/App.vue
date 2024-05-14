<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">Click me</button>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up now!</a>
        <a href="#">More info</a>
      </template>
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </Modal>
  </teleport>
  <!--the netninja challenge-->
  <teleport to=".modals" v-if="showModal2">
    <Modal theme="nosale" @close="toggleModal2">
      <h1>{{ header2 }}</h1>
      <p>{{ text2 }}</p>
    </Modal>
  </teleport>
  <button @click.alt="toggleModal">Toggle Modal (alt)</button>
  <button @click="toggleModal2">Toggle Modal2</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "app",
  components: {
    Modal,
  },
  data() {
    return {
      title: "Primera web",
      header: "Sign up for the Giveaway!",
      text: "Grab your ninja taatta",
      showModal: false,

      header2: "the second modal",
      text2: "the second text",
      showModal2: false,
    };
  },
  methods: {
    handleClick() {
      //apunta a todos los ref del fichero y devuelve la etiqueta que tiene el nombre igual
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    },
  },
};
</script>

<style scoped>
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
