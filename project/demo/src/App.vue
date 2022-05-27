<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    // this.addrouter()
  },
  methods:{
    addrouter(){
      const router = [
                {
                    path: '/',
                    name: 'home',
                    redirect:'',
                    component: () => import('./views/home.vue')
                },
                {
                    path:'/home',
                    component:() => import('./views/home.vue'),
                    redirect:'/timeshow',
                    children:[{
                      path:'/timeshow',
                      name:'计时器',
                      component:() => import('./components/timeshow.vue')
                    },{
                      path:'/formdata',
                      name:'提交表單',
                      component:() => import('./components/formdata.vue'),
                    },{
                      path:'/uploadfile',
                      name:'上传文件',
                      component:() => import('./components/uploadfile.vue'),
                    },{
                      path:'/echarts',
                      name:'图表',
                      component:() => import('./components/echarts.vue'),
                    },{
                      path:'/test',
                      name:'测试',
                      component:() => import('./components/test.vue'),
                    },{
                      path:'/test1',
                      name:'测试1',
                      component:() => import('./components/test1.vue'),
                    }]
                  },
            ]
      // const router = [{
      //   path:'/',
      //   name:'home',
      //   redirect:'',
      //   component:()=>import('@/views/home.vue')
      // },{
      //   path:'/home',
      //   name:'home',
      //   component:()=>import('@/views/home.vue'),
      //   children:[{
      //     path:'/menu',
      //     name:'菜单管理',
      //     component:()=>import('@/views/manage/menu.vue')
      //   }]
      // }]
              this.$router.addRoutes(router)


    }
  }
}
</script>

<style>
#app{
  /* height: 700px; */
}
</style>
