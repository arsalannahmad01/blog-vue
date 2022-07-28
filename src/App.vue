<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding:0;
  margin:0
}

.logo {
  width:400px
}

.login input {
  width:300px;
  height:30px;
  display:block;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:30px;
  padding-left: 20px;
  padding-top:5px;
  padding-bottom:5px;
  border:1px solid;
  background-color:#f7fdfd;
}

.login button {
    width: 325px;
    height: 40px;
    font-size:16px;
    border: 1px solid #255474;
    color: #fff;
    background-color: #255474;
    cursor:pointer;
}
</style>
