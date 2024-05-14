<template>
  <div class="block" v-if="showBlock" @click="stopTimer">Click me</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      time: null,
      reactionTime: 0,
    };
  },
  methods: {
    startTimer() {
      //Cada 10 milisegundos se actualiza el reaction time
      this.time = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.time);
      this.$emit("end", this.reactionTime);
    },
  },
  mounted() {
    //Justo se utiliza en bloque se dispara
    console.log("component mounted");
    console.log(this.delay);
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  updated() {
    //Cuando el componente se actualiza de dispara
    console.log("component updated");
  },
  unmounted() {
    //Cuando el componente se desmonte se dispara
    console.log("component unmounted");
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background-color: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
