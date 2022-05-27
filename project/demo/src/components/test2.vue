<template>
  <div>
    <div>
        <!-- 连接数据库 -->
        <h1>一、连接数据库</h1>
        <p style="font-weight:bold">
            1 安装数据库
            <br>
            const mysql = require('mysql');
            <br>
            2 创建连接配置
            <br>
            const conn = mysql.createConnection({
                host:'192.168.5.100',   // 主机名 （服务器地址）
                user:'root',    //用户名
                password:'123456',    // 密码
                database:'wtt',  // 写上自己要连接的数据库名字
            })
            <br>
            3 建立连接
            <br>
            conn.connect(function (err) {
                if (err) {
                    console.log('[query] - :' + err);
                    return;
                }
                console.log('[connection connect]  succeed!');
            });
            <br>
            4 查询语句
            <br>
            var query= 'select * from person'
            conn.query(query,function(err,data){
                console.log(data)
            })
        </p>
    </div>
     <!-- 设置host为%，其他电脑可以通过本地电脑的ip地址进行连接 -->
    <div>
        <h1>二、设置host为%，其他电脑可以通过本地电脑的ip地址进行连接</h1>
        <p>1、通过mysql -u root -p打开数据库</p>
        <p>2、use mysql</p>
        <p>3、通过select user,host,password from user; 查看目前有的host</p>
        <p>4、通过grant all privileges on *.* to root@'%' with grant option;或update user set host = '%'  where user ='root';将host设置为’%‘</p>
        <p>5、通过flush privileges;使设置立即生效</p>
    </div>
    <div>
        <h1>三、搭建mysql服务器</h1>
        <p>
            <a href="https://zhuanlan.zhihu.com/p/328985654">参考链接一</a>
        </p>
        <p>
            <a href="https://blog.csdn.net/weixin_45242865/article/details/118227786">参考链接二</a>
        </p>
        <p>
            <a href="https://blog.csdn.net/qq_37557801/article/details/102835189">参考链接三</a>
        </p>

    </div>
    <div>
        <h1>四、navicat操作数据库</h1>
        <p>
            <a href="https://zhuanlan.zhihu.com/p/480395825">参考链接一</a>
        </p>
        <p>
            <a href="https://zhuanlan.zhihu.com/p/370510336">参考链接二</a>
        </p>
    </div>
    <div>
        <h1>五、分布式版本控制系统</h1>
        <p>
            <a href="https://www.liaoxuefeng.com/wiki/896043488029600/896827951938304">git廖雪峰的网站</a>
        </p>
        <p>
            <a href="http://www.svn.org.cn/229.html">svn的搭建和使用</a>
        </p>
    </div>
  </div>
</template>

<script>
export default {
    name:'test2',
    data(){
        return{

        }
    },
    methods:{

    },
}
</script>

<style scoped>
p{
    line-height: 35px;
}
div{
    margin-top:20px ;
    margin-bottom: 10px;
}
</style>