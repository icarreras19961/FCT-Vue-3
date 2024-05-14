<template>
  <div class="backdrop" @click.self="closeModal">
    <!-- la clase rara es como in condicional en este caso-->
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot>Defaul content</slot>
      <div class="actions">
        <slot name="links">No links used here</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
/**Scoped para que solo se aplique en el template */
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background-color: white;
  border-radius: 10px;
}
.backdrop {
  text-align: center;
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.51);
  width: 100%;
  height: 100%;
}
h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
.actions {
  text-align: center;
  margin: 30px 0px 10px 0px;
  color: #333;
}
.actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
.sale {
  background-color: red;
  color: white;
}

.sale h1 {
  color: white;
}
.sale .action {
  color: white;
}
.sale .action a {
  color: white;
}


</style>
