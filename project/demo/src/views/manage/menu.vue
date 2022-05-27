<template>
    <div>
        <h1>菜单管理——</h1>
        <div style="width:1000px;margin-left:80px;margin-top:50px">
        <el-table
        :data = "tabledata"
        :align="center"
        height="500"
        >
            <el-table-column type="index" label="序列" width="120"></el-table-column>
            <el-table-column prop="name" label="名称">
            </el-table-column>
            <el-table-column prop="path" label="路径"></el-table-column>
            <el-table-column prop="grade" label="菜单级别"></el-table-column>       
        </el-table>
        </div>
    </div>  
</template>

<script>
export default {
    name:'menu',
    data(){
        return{
            tabledata:[],
        }
    },
    created(){
        this.getdata()
    },
    methods:{
        // 获取表中数据
        getdata(){
           var menudata1 = this.$router.options.routes[0]
                this.tabledata.push({
                    name:menudata1.name,
                    path:menudata1.path,
                    grade:'一级菜单'
                })
            var menudata = this.$router.options.routes[1].children;
            for(let i=0;i<menudata.length;i++){
                this.tabledata.push({
                    name:menudata[i].name,
                    path:menudata[i].path,
                    grade:'二级菜单'
                })
            }
        }
    }

}
</script>

<style>

</style>