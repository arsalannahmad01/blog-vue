<template>
<Header />
<h1>{{blog.title}}</h1>
<p>{{blog.body}}</p>
<router-link :to="'/' + this.$route.params.id + '/share'" ><button class="share-btn" >Share</button></router-link>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name:'ViewBlog',
    components:{
        Header
    },
    data() {
        return {
            blog: {
                title:'',
                body:''
            }
        }
    },
    async mounted() {

        let user = await localStorage.getItem('token')
        if(!user) {
            this.$router.push({name:'LogIn'})
        }

        let res = await axios.get("/api/v1/blogs/" + this.$route.params.id,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
        })
            
        this.blog = res.data.blog
    }
}

</script>

<style>

.share-btn {
    width:70px;
    border:none;
    padding:10px;
    background-color:#255474;
    color:#FFFFFF;
    border-radius:3px;
    font-size:14px;
    cursor:pointer;
}


</style>