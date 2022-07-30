<template>
  <Header />
    <div class="blog-list" v-for="item in blogs" :key="item.title">
      <div class="blog-view" >
      <h2>{{item.title}}</h2>
      <p>{{item.body}}</p>
      </div>
      <div class="edit-view">
        <router-link :to="'/view-blog/' + item._id" ><button>View</button></router-link>
        <router-link :to="'/edit-blog/' + item._id"><button>Edit</button></router-link>
        <button v-on:click="deleteBlog(item._id)" >Delete</button>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
  name: 'HomePage',
  components: {
    Header
  },
  data() {
    return {
      blogs: []
    }
  },
  methods: {
    async loadData() {
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
    let user = await localStorage.getItem('token')
    if(!user) {
      this.$router.push({name: 'LogIn'})
    }

    this.loadData()
  }
}
</script> 

<style>
.blog-list {
  color:#FFFFFF;
  height:120px;
  display: block;
  margin-bottom: 20px;
  background-color:#349460;
  margin-left: 30px;
  margin-right: 30px;
  padding-top: 5px;
  padding-bottom: 8px;
  border-bottom-style: outset;
  border-radius: 5px;
}

.blog-view {
  width:70%;
  height: 100%;
  float:left;
}

.blog-view h2 {
  text-align:center;
}

.edit-view {
  float: right;
  width: 18%;
  height: 100%;
  padding-top: inherit;
  margin-right:10px;
}

.edit-view button{
  color: #ffffff; 
  background-color: #215563;
  font-size:14px;
  font-weight:600;
  margin-top: 5px;
  width: 100%;
  display: block;
  padding: 8px 5px;
  cursor: pointer;
  border: none;
}
</style>