import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 1、普通方式
// import home from '../views/home'
// import formdata from '../components/formdata'
// import uploadfile from '../components/uploadfile'
// import echarts from '../components/echarts'
// 2、路由懒加载方式
const home = () => import('../views/home')
const timeshow = () => import('../components/timeshow');
const formdata = () => import('../components/formdata');
const uploadfile = () => import('../components/uploadfile')
const echarts = () => import('../components/echarts')




const router = new Router({
  routes: [
    {
      path:'/',
      redirect:'',
      name:'首页',
      component:home,
    },
    {
      path:'/home',
      component:home,
      redirect:'/timeshow',
      children:[{
        path:'/menu',
        name:'菜单管理',
        component:()=>import('@/views/manage/menu.vue'),
      },{
        path:'/timeshow',
        name:'计时器',
        component:timeshow
      },{
        path:'/formdata',
        name:'提交表單',
        component:formdata,
      },{
        path:'/uploadfile',
        name:'上传文件',
        component:uploadfile,
      },{
        path:'/echarts',
        name:'图表',
        component:echarts,
      },{
        path:'/wechat',
        name:'进度滑动条',
        component:()=>import('@/components/wechat.vue')
      },{
        path:'/test1',
        name:'视频播放',
        component:()=>import('@/components/test1.vue')
      },{
        path:'/uitest',
        name:'组件库',
        component:()=>import('@/components/uitest.vue')
      },{
        path:'/testvideo',
        name:'video組件',
        component:()=>import('@/components/testvideo.vue')
      },{
        path:'/test2',
        name:'知识总结',
        component:()=>import('@/components/test2.vue')
      }]
    },
  ]
})





export default router