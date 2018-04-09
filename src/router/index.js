import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/Index.vue'
import Book from '../components/Book.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
    	path:'/index',
    	name:'index',
    	component:Index,
        children:[
            {
                path: '/index/book',
                name: 'book',
                component: Book
            }
      ]
    }
  ]
})
