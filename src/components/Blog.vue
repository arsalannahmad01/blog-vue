<template>
<Header />
<div class="blog">
<input type="text" placeholder="Title" />
<textarea placeholder="Write your blog" rows="4" cols="50" />
</div>
</template>

<script>
import Header from './Header.vue'
export default {
    name:"CreateBlog",
    components:{
        Header
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