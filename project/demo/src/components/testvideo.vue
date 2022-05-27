<template>
  <div>
      <div>
      <button @click="playPause()">播放/暂停</button>
      <button @click="makeBig()">放大</button>
      <button @click="makeSmall()">缩小</button>
      <button @click="makeCommon()">普通</button>
      <br><br>
      </div>
      <!-- 视屏 -->
      <video id="video1" src="../assets/test.mp4" controls width="600px" height="300px"></video>
      <!-- 图片 -->
      
      <!-- 画布 -->
      <!-- <canvas id="canvas1" width="200px" height="100px" ></canvas> -->
      <img id="img1" src="../assets/bingdundun.jpg" width="200px" height="400px" alt="原图后面的是canvas画图">
      <canvas id="canvas2" width="300px" height="400px" ></canvas> 
      <!-- <canvas id="canvas3" width="200px" height="100px" style="border:solid 1px red"></canvas> -->
  </div>
</template>

<script>
export default {
    name:'testvideo',
    data(){
        return{
            videohh:null,
            i:'',
        }
    },
    mounted(){
        // this.canvastest()
        this.canvas2()
        this.getpic()
    },
    created(){
    },
    methods:{
        // 暂停播放控制
        playPause(){       
            this.videohh = document.getElementById('video1') 
            if(this.videohh.paused){
                this.videohh.play()
            }else{
                this.videohh.pause()
            }
        },
        // 放大
        makeBig(){
            this.videohh.width=1000
            this.videohh.height=500
        },
        makeSmall(){
            this.videohh.width=400
            this.videohh.height=200
        },
        makeCommon(){
            this.videohh.width=600
            this.videohh.height=300
        },
        // 绘图canvas1
        canvastest(){
            var canvas1 = document.getElementById('canvas1')
            var ctx = canvas1.getContext('2d')
            // 绘制黑色矩形
            ctx.fillStyle="black"
            ctx.fillRect(70,35,50,25)
            // 绘制线条
            ctx.moveTo(0,0)
            ctx.lineTo(200,100)
            ctx.stroke()
            // 绘制圆形
            ctx.beginPath();
            ctx.arc(95,50,40,0,2*Math.PI);
            // ctx.fill();
            ctx.stroke()
        },
        // 绘图canvas2
        canvas2(){
            var canvas2 = document.getElementById('canvas2')
            var ctx = canvas2.getContext('2d')
            // 画布上绘制图片img
            let img = document.getElementById('img1')
            img.addEventListener('load',function(){
                console.log('jjjj')
                ctx.drawImage(img,0,0)
            })
        },
        // https://www.w3school.com.cn/tags/canvas_drawimage.asp
        // 绘制视频的某一帧图片
        getpic(){
            var video = document.getElementById('video1')
            // video.setAttribute('autoplay','autoplay')
            var canvas3 = document.getElementById('canvas3')
            var ctx = canvas3.getContext('2d')
            var that = this
            video.addEventListener('play',function(){
                that.i = setInterval(()=>{
                    console.log('hhhh')
                    ctx.drawImage(video,0,0,200,100)
                },2000)
            })    
            video.addEventListener('pause',function(){
                clearInterval(that.i)
            })    
            // video.addEventListener('ended',function(){
                // clearInterval(that.i)
            // })   
        }
    }
}
</script>

<style>

</style>