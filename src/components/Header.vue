<template>
<div class="header">
<router-link to="/" >Home</router-link>
<router-link to="/" >Create blog</router-link>
<a v-on:click="logout" href="#" >Logout</a>
</div>
</template>

<script>

export default {
    name:"HeaderCompo",
    methods: {
        logout() {
            sessionStorage.clear()
            this.$router.push({name:'LogIn'})
        }
    }
}

</script>

<style>

.header{
    background-color:#255474;
    overflow:hidden;

}

.header a {
    padding: 16px 14px;
    float: left;
    margin-right: 6px;
    text-decoration: none;
    font-size: 16px;
    text-align: center;
    color:#f2f2f2;
}

.header a:hover {
    background-color:#08A75F;
    color:#FFFFFF;
}

</style>