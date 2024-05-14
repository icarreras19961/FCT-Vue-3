<template>
  <form @submit.prevent="handleSubmit">
    <label>Email: </label>
    <input type="email" required v-model="email" />

    <label>Passord: </label>
    <input type="pwd" required v-model="pwd" />
    <div v-if="pwdError" class="error">{{ pwdError }}</div>

    <label>Role: </label>
    <select v-model="role">
      <option value="developer">Web developer</option>
      <option value="designer">Web designer</option>
      <option value="tester">Web tester</option>
      <option value="junior">Web developer junior</option>
    </select>

    <label>Skills</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="deleteSkill(skill)">
        {{ skill }}
      </span>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept terms and Conditions</label>
    </div>

    <div class="submit">
      <button>Create Account</button>
    </div>

    <!--Si tiene el mismo v-model varios cosos le pones un array y dentro del
    array se pondran los value
    <div>
      <input type="checkbox" value="Ivan" v-model="names" />
      <label>Ivan</label>
    </div>
    <div>
      <input type="checkbox" value="Francisco" v-model="names" />
      <label>Francisco</label>
    </div>
    <div>
      <input type="checkbox" value="Pepe" v-model="names" />
      <label>Pepe</label>
    </div>-->
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ pwd }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms: {{ terms }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      pwd: "",
      role: "tester",
      terms: false,
      tempSkill: [],
      skills: [],
      pwdError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        //To detect duplicated content
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
          this.tempSkill = "";
        }
      }
    },
    deleteSkill(skill) {
      console.log(skill);
      this.skills = this.skills.filter((item) => {
        //Devuelve true o flase dependiendo si igual item y skill
        return skill !== item;
      });
    },
    handleSubmit() {
      //Validate error
      this.pwdError = this.pwd.length > 5 ? "" : "Password have to be longer";
      if (!this.pwdError) {
        console.log("Email: " + this.email);
        console.log("Password: " + this.pwd);
        console.log("Role: " + this.role);
        console.log("Skills: " + this.skills);
        console.log("Terms: " + this.terms);
      }
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background-color: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #aaa;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background-color: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background-color: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
