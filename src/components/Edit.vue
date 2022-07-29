<template>
<Header />
<div class="blog">
<input type="text" placeholder="Title" name="title" v-model="blog.title" />
<textarea type="text" placeholder="Write your blog" rows="40" name="body"  v-model="blog.body" />
<button v-on:click="editBlog">Edit</button>
</div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name:"EditBlog",
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
        async editBlog() {
            // console.log(this.$route.params.id)
            let res = await axios.patch("/api/v1/blogs/" + this.$route.params.id, {
                title:this.blog.title,
                body:this.blog.body
            },
            {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })

            if(res.status === 200) {
                this.$router.push({name:'HomePage'})
            }
        }
    },
    async mounted() {
        
        let res = await axios.get("/api/v1/blogs/" + this.$route.params.id, {
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        } )

        // console.log(res)
        this.blog = res.data.blog
    }
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