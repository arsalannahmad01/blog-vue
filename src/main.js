import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './routes'
// import VueSession from "vue-session"
// Vue.use(VueSession)
createApp(App).use(router).mount('#app')