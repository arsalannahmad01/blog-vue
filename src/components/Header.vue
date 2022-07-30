<template>
<div class="header">
<router-link to="/" >Home</router-link>
<router-link to="/create-blog" >Create blog</router-link>
<a v-on:click="logout" href="#" >Logout</a>
<p>Welcome, {{name}}</p>
</div>
</template>

<script>

export default {
    name:"HeaderCompo",
    data() {
        return {
            name:''
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('token')
            this.$router.push({name:'LogIn'})
        },
        async loadName() {
            this.name = await localStorage.getItem('user-info') 
        }
    },
    mounted() {
        this.loadName()
    }
}
</script>

<style>

.header{
    background-color:#255474;
    overflow:auto;
    margin-bottom:50px;
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

.header p{
    float:right;
    margin-right:30px;
    color:#FFFFFF
}

</style>