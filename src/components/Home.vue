<template>
  <Header />
    <div class="blog-list" v-for="item in blogs" :key="item.title">
      <h2>{{item.title}}</h2>
      <div class="blog-view" >
        <p>{{item.body}}</p>
      </div>
      <router-link :to="'/view-blog/' + item._id" ><button id="view" >View</button></router-link>
      <router-link v-if="item.author" :to="'/edit-blog/' + item._id"><button id="edit" >Edit</button></router-link>
      <button v-if="item.author" v-on:click="deleteBlog(item._id)" id="delete" >Delete</button>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
import decoder from 'jwt-decode'
export default {
  name: 'HomePage',
  components: {
    Header
  },
  data() {
    return {
      blogs: [],
      author: false,
    }
  },
  methods: {
    async loadData(ownerId) {
      // let user = await localStorage.getItem('token')
      // if(!user) {
      //   this.$router.push({name:'LogIn'})
      // }

      let res = await axios.get("/api/v1/blogs",{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      // console.log(res.data)

      this.blogs = res.data.blogs

      this.blogs.forEach(blog => blog.author = ownerId === blog.createdBy._id)
    },
    async deleteBlog(id) {
      let res = await axios.delete("/api/v1/blogs/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      if(res.status === 200) {
        this.loadData()
      }
    }
  },
  async mounted() {
    let token = await localStorage.getItem('token')
    if(!token) {
      this.$router.push({name: 'LogIn'})
    }

    // decode jwt token to get user details
    const user = decoder(token);
    this.loadData(user.id)
  }
}
</script> 

<style>
.blog-list {
    display: inline-block;
    position: relative;
    height: 350px;
    width: 350px;
    margin-bottom: 40px;
    margin-left: 20px;
    margin-right: 20PX;
    background-color: #349460;
    border-radius: 5px;
    color: #FFFFFF;
}

.blog-view {
  width:100%;
  float:left;
}

.blog-view h2 {
  margin-top:2px;
  margin-left:auto;
  margin-right:auto;
  text-align:center;
}

.blog-view p {
  margin: 15px 10px;
  height:140px;
  overflow: hidden
}

#view {
  position:absolute;
  right:0;
  bottom: 70px;
}

#edit {
  position:absolute;
  right:0;
  bottom: 35px;
}

#delete {
  position:absolute;
  left:0;
  bottom:0;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
}

.blog-list button{
  display: block;
  height:35px;
  font-weight:600;
  margin-top: 5px;
  width: 100%;
  border: none;
  border-bottom-style: revert;
  font-size:14px;
  background-color: #215563;
  color: #ffffff; 
  cursor: pointer;
}
</style>