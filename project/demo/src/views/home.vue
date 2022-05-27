<template>
<div>
    <el-container>
        <el-header style="font-size:20px">
            <h1>项目总结</h1>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <!-- 菜单 -->
                <el-menu router>
                    <el-submenu index = '1'>
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>                     
                        <!-- 1、普通菜单 -->
                        <!-- <el-menu-item index="timeshow">1、計時器</el-menu-item> -->
                        <!-- 2、动态菜单 -->
                            <el-menu-item
                            v-for="item in menus"
                            :key="item.id"
                            :index="item.rname"
                            >
                                {{item.id}}、{{item.name}}
                            </el-menu-item>                       
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main style="height:735px;">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
   
    <!-- </div> -->
</div>
</template>

<script>
export default {
    name:'home',
    data(){
        return{
            menus:[],
            router:[
                    {
                        path: '/',
                        name: 'home',
                        redirect:'',
                        component: () => import('@/views/home.vue')
                    },
                    {
                        path:'/home',
                        component:() => import('@/views/home.vue'),
                        redirect:'/timeshow',
                        children:[{
                        path:'/timeshow',
                        name:'计时器',
                        component:() => import('@/components/timeshow.vue')
                        },{
                        path:'/formdata',
                        name:'提交表單',
                        component:() => import('@/components/formdata.vue'),
                        },{
                        path:'/uploadfile',
                        name:'上传文件',
                        component:() => import('@/components/uploadfile.vue'),
                        },{
                        path:'/echarts',
                        name:'图表',
                        component:() => import('@/components/echarts.vue'),
                        },{
                        path:'/test',
                        name:'测试',
                        component:() => import('@/components/test.vue'),
                        },{
                        path:'/test1',
                        name:'测试1',
                        component:() => import('@/components/test1.vue'),
                        }]
                    },
                ],
        }
    },
    created(){
        this.getrouter()
    },
    methods:{
        //  1、获取路由
        getrouter(){
            // var menudata = this.router[1].children;
            var menudata = this.$router.options.routes[1].children
            console.log(menudata,'ssss')
            for(let i=0;i<menudata.length;i++){
                this.menus.push({
                    id:i+1,
                    rname:menudata[i].path,
                    name:menudata[i].name
                })
            }
        },
    },
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    /* width: 100%;
    height: 100%; */
}
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    /* text-align: center; */
    /* line-height: 60px; */
  }
 .el-aside {
    background-color: #D3DCE6;
    color: #333;
    /* text-align: center; */
    /* line-height: 200px; */
  }
   .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center; */
    /* line-height: 160px; */
  }

  /* body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  } */

/* *{
    margin: 0;
    padding:0 ;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.content{
    overflow: auto;
}
.header{
    /* position: absolute; */
    /* top:0; */
    /* left: 0; */
    /* height: 20%;
    background: rgb(126, 153, 126);
} */
/* .left{ */
    /* float: left; */
    /* position: absolute;
    top:20%;
    left: 0;
    width: 20%;
    height: 80%; */
    /* height: 613px; */
    /* background: rgb(126, 153, 126); */
    /* overflow: hidden; */
/* } */
/* .right{
    position: absolute;
    top: 20%;
    left: 20%; */
    /* height: 613px; */
    /* background: rgb(148, 170, 163); */
    /* margin-left: 200px; */
/* }  */
/* .el-header{
    background: grey;
    height: 80px !important;
}
.el-aside{
    height: 613.82px; 
    border: solid 1px black;
    /* width: 200px; */
    /* overflow: hidden;
} */ 
/* .el-menu{
    width: 200px;
    /* height: 50px; */
    /* background: pink; */
    /* border: solid 5px red; */
/* }  */
/* .el-submenu__icon-arrow ::before{ */
    /* border: solid 1px red; */
    /* position: relative;
    top: -10px;
    height: 40px;
    left: -70px; */
/* } */
/* .el-main{
    border: 1px solid black;
    /* height: 613px; */
    /* overflow: auto; */
/* }  */
/* .el-icon-location{
   height: 20px;
}
.el-menu-item-group__title{
    height: 20px;
} */

</style>