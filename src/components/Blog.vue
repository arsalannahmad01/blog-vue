<template>
<Header />
<div class="blog">
<input type="text" placeholder="Title" v-model="blog.title" />
<textarea placeholder="Write your blog" rows="40" v-model="blog.body" />
<button v-on:click="createBlog" >Create Blog</button>
</div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name:"CreateBlog",
    data() {
        return {
           blog:{
                title:'',
                body:''
           }
        }
    },
    components:{
        Header
    },
    methods: {
        async createBlog() {
           let res = await axios.post("/api/v1/blogs", this.blog, {
                headers:{
                    Authorization: `Bearer ${await localStorage.getItem('token')}`
                }
           })

           if(res.status === 200) {
                this.$router.push({name:'HomePage'})
           }
        }
    },
    // async mounted() {
    //     let user = await localStorage.getItem('token')
    //     if(!user) {
    //       this.$router.push({name: 'LogIn'})
    //     }
    // }
}
</script>


<style>

.blog {
    background-color:red;
    margin-left:auto;
    margin-right:auto;
    padding:30px 25px;
    width:700px;
    height:750px;
    margin-top:100px;
}

.blog input, .blog textarea {
    display:block;
    width:600px;
    padding:10px 20px;
    margin-bottom:20px;
}

</style>