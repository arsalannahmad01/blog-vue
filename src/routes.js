import Home from './components/Home.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import Blog from './components/Blog.vue'
import Edit from './components/Edit.vue'
import View from './components/View.vue'
import Share from './components/Share.vue'
import { createRouter, createWebHistory } from 'vue-router' 

const routes = [
    {
        name:"HomePage",
        component:Home,
        path:'/'
    },
    {
        name:"SignUp",
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:"LogIn",
        component:Login,
        path:'/login'
    },
    {
        name:"Blog",
        component:Blog,
        path:'/create-blog'
    },
    {
        name:"Edit",
        component:Edit,
        path:'/edit-blog/:id'
    },
    {
        name:"ViewBlog",
        component:View,
        path:'/view-blog/:id'
    },
    {
        name:"SharePage",
        component:Share,
        path:'/:id/share'
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router