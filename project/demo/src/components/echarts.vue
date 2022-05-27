<template>
 <div>
     <h1 style = "height:80px">这个是图表页面————</h1>
    <div class="father">
        
        <!-- <button @click="getEcharts()">获取图表</button> -->

        <div ref="test"></div>
        <div ref="test1" style="height:600px"></div>
        <div ref="test2"></div>
        <div ref="test3"></div>
    </div>
 </div>
</template>


<script>
export default {
    name:'echarts',
    data(){
        return{
            test:'',
            test1:'',
            timer:'',

        }
            

    },
    mounted(){
        let test = this.$refs.test;
        let test1 = this.$refs.test1;
        let test2 = this.$refs.test2;
        this.getEcharts(test)
        this.getDemo1(test1)
        this.timer = setInterval(this.update(test2),3000);
    },
    created(){
    },
    methods:{
        //  1、柱形图
        getEcharts(test){
            var mycharts = this.$echarts.init(test,'customed')
            var option = {
                title:{
                    text:'柱形图',
                },
                xAxis:{
                    data:['周一','周二','周三','周四','周五','周六','周日']
                },
                yAxis:{},
                series:[{
                    type: 'bar',
                    data: [23, 24, 18,{value:43,itemStyle:{color:'red',shadowColor:'pink',boderType:'dashed',opacity:0.5}}, 27, 28, 25],
                    itemStyle:{
                        barBorderRadius:5,
                        borderWidth:2,
                        borderType:'solid',
                        borderColor:'black',
                        shadowColor:'yellow',
                    },
                    barWidth:'90%',
                    }]
                }
            mycharts.setOption(option)
        },

        // 2、
        getDemo1(test1){
            const mycharts1 = this.$echarts.init(test1,'customed')
            mycharts1.setOption({
                title:{
                    text:'多系列',
                },
                xAxis: {
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {},
                series: [
                    {
                    type: 'bar',
                    data: [23, 24, 18, 25, 27, 28, 25]
                    },
                    {
                    type: 'bar',
                    data: [26, 24, 18, 22, 23, 20, 27]
                    }]
            })
            window.onresize = function(){
                mycharts1.resize()
            }
        },

        // 3、update
        update(test2){
            var data = [];
            for (let i = 0; i < 5; ++i) {
            data.push(Math.round(Math.random() * 200));
            }

            var option = {
            xAxis: {
                max: 'dataMax'
            },
            yAxis: {
                type: 'category',
                data: ['A', 'B', 'C', 'D', 'E'],
                inverse: true,
                animationDuration: 300,
                animationDurationUpdate: 300,
                max: 2 // only the largest 3 bars will be displayed
            },
            series: [
                {
                realtimeSort: true,
                name: 'X',
                type: 'bar',
                data: data,
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true
                }
                }
            ],
            legend: {
                show: true
            },
            animationDuration: 3000,
            animationDurationUpdate: 3000,
            animationEasing: 'linear',
            animationEasingUpdate: 'linear'
            };

            var data = option.series[0].data;
            for (var i = 0; i < data.length; ++i) {
                if (Math.random() > 0.9) {
                data[i] += Math.round(Math.random() * 2000);
                } else {
                data[i] += Math.round(Math.random() * 200);
                }
            }
            const mycharts2 = this.$echarts.init(test2)
            mycharts2.setOption(option);


        }
    },
}
</script>

<style>
.father{
    display: flex;
    /* border:solid red 1px ; */
}

.father div{
    width: 400px;
    height: 300px;
    /* border: solid 1px red; */
    margin-top: 20px;
    margin-left: 20px;
}

</style>