<template>
<div>
    <h1>进度滑动条————</h1>

    <div class="zhihuiludeng">
        <div style="position:relative;top:-20px">
            <div class="left1" @click="enterStart()"></div>
            <el-slider
            v-model="start_value"
            style="width: 295px;position: relative;top: 0px;height: 8px;left: 80px;"
            @input="getStartValue()"
            :show-tooltip="false"
            ref="slider"
            ></el-slider>
            <div class="right1" @click="leaveStart()"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'wechat',
    data(){
        return{
            value:'',
            cars:[{
                id:0,
                photo:require('../assets/样式.png')
            },{
                id:1,
                photo:require('../assets/左边.png')
            },{
                id:2,
                photo:require('../assets/logo.png')
            }],
            start_value:'',
        }
    },
    methods:{
        // 滑动条
        getStartValue() {
            var button = document.getElementsByClassName("el-slider__button")[0];
            button.setAttribute("data-before", this.start_value + "%");
        },
        enterStart() {
            alert('进入了')
        },
        leaveStart() {
            alert('离开了')
        },
    }

}
</script>

<style>
  .photo{
    background-image: url('../assets/样式.png');
    background-repeat:no repeat ;
    background-size: 99% 97%;
    width:600px;
    height:180px;
  }

   .left1 {
    width: 40px;
    height: 40px;
    background-image: url('../assets/images/左边.png');
    background-repeat: no-repeat;

    position: relative;
    top: 40px;
    left: 24px;
    cursor: pointer;
  }

  .right1 {
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-image: url('../assets/images/右边.png');
    background-repeat: no-repeat;
    position: relative;
    top: -5px;
    left: 425px;
  }
   .el-slider{
       border:none;
   }

 .el-slider__button {
    position: relative;
    top: 2px;
    left: 5px;
    background: transparent;
    height: 45px;
    width: 71px;
    border-radius: 0;
    border: none;
    background-image: url('../assets/images/滑动.png');
    background-repeat: no-repeat;
    background-size: 70% 70%;
  }

  .el-slider__button::before {
    content: attr(data-before);
    color: black;
    position: relative;
    top: 2px;
    font-size: 12px;
  }

   .zhihuiludeng {
       position: relative;
       top:200px;
       left:250px;
        background-image: url('../assets/images/组件.png');
        background-repeat: no-repeat;
        background-size: 40% 75%;
   }


</style>