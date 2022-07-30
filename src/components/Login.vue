<template>
  <img class="logo" src="../assets/blog-logo.png" />
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="login" >Login</button>

    <p>
      Need to create an account?
      <router-link to="/sign-up"> Sign Up</router-link>
    </p>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'LogIn',
  data() {
    return {
      email:'',
      password:''
    }
  },
  methods: {
    async login() {
      let res = await axios.post("/api/v1/users/login", {
        email:this.email,
        password:this.password
      })

      if(res.status === 201) {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem("user-info", res.data.name)
        this.$router.push({name:"HomePage"})
      }
    }
  },
  async mounted() {
    let user = await localStorage.getItem('token')
    if(user) {
      this.$router.push({name:'HomePage'})
    }
  }
}
</script>


<style>



</style>