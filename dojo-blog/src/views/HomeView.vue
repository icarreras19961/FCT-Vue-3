<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p ref="p">Mi name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Add 1 to age</button>
    <input type="text " v-model="name" />
    <hr />
    <h2>Reactive</h2>
    <h3>Refs example</h3>
    {{ ninjaOne.name }} - {{ ninjaOne.age }}
    <button @click="updateNinjaOne">Update ninja one</button>

    <h3>Reactive example</h3>
    {{ ninjaTwo.name }} - {{ ninjaTwo.age }}
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
//permite coger elementos con ese nombre en el dom
import { ref, reactive } from "vue";

export default {
  name: "Home",
  //setup es el primer livecicles hook en ejecutarse(son en este orden:
  //setup -> created -> mounted
  //)
  setup() {
    console.log(this);
    //Refs
    const p = ref(null);

    //con el ref delante hacemos que la variable cambie por todos lados
    let name = ref("ivan");
    let age = ref(21);

    const handleClick = () => {
      console.log(p.value);
      name.value = "pepe";
      age.value = 30;
    };

    //Reactive
    const ninjaOne = ref({ name: "Arturo", age: 27 });
    const ninjaTwo = reactive({ name: "Jose", age: 50 });

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };
    //con reactive no hace falta poner el value
    const updateNinjaTwo = () => {
      ninjaTwo.age = 40;
    };
    //se puede hacer el return de la funcion para que haga cosas con los datos anidados
    return {
      name: name,
      age: age,
      handleClick,
      p,
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
    };
  },
};
</script>
