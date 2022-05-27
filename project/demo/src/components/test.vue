<template>
    <div>
        <h1>测试页面————</h1>
       <div style="width:1000px;margin-left:60px;margin-top:20px">
        <el-table
        :data = "tabledata"
        :align="center"
        >
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="path" label="路径"></el-table-column>
        <el-table-column prop="children" label="子路由"></el-table-column>
        <el-table-column prop="component" label="组件"></el-table-column>
        
        </el-table>
       </div>
    </div>
</template>

<script>
export default{
    name:'test',
    data(){
        return{
            tabledata:[{
                name:'home',
                path:'/home',
                children:[],
                component:'',
            }],

        }
    },
}
</script>

<style>
</style>