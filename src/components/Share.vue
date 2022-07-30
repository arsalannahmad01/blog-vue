<template>
<h1>Share Blog</h1>
<div class="share" >
    <input type="text"  placeholder="Enter email" v-model="email" />
    <button v-on:click="share">Share</button>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name:'SharePage',
    data() {
        return {
            email:''
        }
    },
    methods:{
        async share() {
            let res = await axios.put("/api/v1/blogs/" + this.$route.params.id + "/share", {
                email:this.email
            },
            {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })

            if(res.status === 200) {
                this.$router.push({name:'ViewBlog'})
            }
        }
    }
}
</script>

<style>

.share {
    width:500px;
    height:180px;
    border-radius:5px;
    margin-left:auto;
    margin-right:auto;
    margin-top:50px;
    background-color:#215563;
    position: relative;
}


.share input {
    width:80%;
    height:40px;
    margin-top:38px;
    padding-left:20px;
    font-size:16px;
}

.share button {
    width: inherit;
    height: 50px;
    background-color: #7cce5c;
    border: none;
    margin-bottom: 0;
    border-bottom-right-radius: 5px; 
    border-bottom-left-radius: 5px; 
    position: absolute;
    right: 0;
    bottom: 0;
    font-size:16px;
    font-weight:600;
    cursor:pointer;
}

</style>