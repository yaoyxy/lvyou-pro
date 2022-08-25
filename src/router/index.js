import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta:{
      title:'巴黎旅游 | 登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta:{
      title:'巴黎旅游 | 注册'
    }
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      title:'巴黎旅游'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫: 凡是路由发生变化都会触发这个方法
// beforeEach: 路由前置守卫, 路由发生变化前触发
router.beforeEach((to, from, next)=>{
  // to  到哪去
  // from 当前路由
  // 修改标签栏标题:
  document.title = to.meta.title
  next()  //放行 允许路由跳转
})

export default router
