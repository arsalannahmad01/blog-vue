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
   
}

.blog input, .blog textarea {
    width: 75%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    padding: 10px;
    background-color:#f7fdfd;
}

.blog textarea {
    height: 400px;
    margin-bottom:10px;
}

.blog button {
    width: inherit;
    padding:10px 10px;
    border:none;
    background-color: #255474;
    color: #FFFFFF;
}

</style>