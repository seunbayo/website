import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from "./store";
 

// Router imports
import Home from './assets/components/home.vue'
import About from './assets/components/about.vue'
import Projects from './assets/components/projects.vue'
import MiniBlog from './assets/components/blog.vue'
import Contact from './assets/components/contact.vue'

// Router init

Vue.use(VueRouter);
const router = new VueRouter({
  routes : [
    {path: '/', component: Home},
    {path: '/blog', component: MiniBlog},
    {path: '/about', component: About},
    {path: '/projects', component: Projects},
    {path: '/contact', component: Contact}
  ],
  mode : 'history'
})

// Vue init

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store
})
