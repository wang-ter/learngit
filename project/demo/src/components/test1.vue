<template>
  <div>
      <h1>上传视频第一帧—————</h1>
        <div>
            <br><br><br>
         <input id="filetest" type="file" ref="inputtest"/>
            <br><br><br>
            <p style="color:red">
                注:上传视频第一帧,保存到data中的111文件中
            </p>
            <br><br>
        </div>
  </div>
</template>


<script>
// import 'range-slider-element';
import axios from 'axios'
    export default{
        name:'test1',
        data(){
            return{
                fileList1:[],
                showfilelist:true,
            // video: {
            //     url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
            //     cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
            //     muted: false,
            //     loop: false,
            //     preload: 'auto',
            //     poster: '',
            //     volume: 1,
            //     autoplay: false
            // },
            flag:false,
            video:{},
            }
        },
        mounted(){
        var that = this
            that.video =document.createElement("video")
            that.video.setAttribute('controls','controvls')
            that.video.setAttribute('autoplay','autoplay')
            // 上传文件
            this.uploadfile()

        // if(this.flag){
        //     document.body.appendChild(this.video)
        //     this.video.src = window.URL.createObjectURL(this.files[0])
        //     console.log(this.video,'00000')
        //     this.getpicinfo(this.video)
        // }
        
        },
        created(){
            // this.getdata()
            // this.getpicinfo()
              this.instance =  axios.create({
                baseURL:'http://127.0.0.1:8085/',
                headers:{
                            'Content-Type':'multipart/form-data'
                            }
                })
  
        },
        computed:{
            // $video(){
            //     return this.$refs.vueMiniPlayer.$video;
            // }
        },
        methods:{    
       //  上传文件
       uploadfile(){
           var that=this
           document.querySelector('input[type="file"]').addEventListener('change',function(){
               document.body.appendChild(that.video)
               that.video.src=window.URL.createObjectURL(this.files[0])  // this.files[0]是file文件，一般是elupload里面的raw
               // 绘图并上传
               that.getpicinfo(that.video)    
           })
       },
    //  绘制图片并上传  
        getpicinfo(video){
            var that = this
            var imgHeight = 0,imgWidth = 0,videoWidth = 0,videoHeight = 0 
            // 创建画布
            var canvas = document.createElement("canvas");
            document.body.appendChild(canvas)
            var canvasCtx = canvas.getContext("2d");
            // 视频播放时截取
            video.addEventListener("play",function() {
                //获取展示的video宽高作为画布的宽高和临时视频截图的宽高
                canvas.width = imgWidth = video.offsetWidth;
                canvas.height = imgHeight = video.offsetHeight;
                //获取实际视频的宽高，相当于视频分辨率吧
                videoWidth = video.videoWidth;
                videoHeight = video.videoHeight;
                setTimeout(() => {
                    // 两秒后视频暂停
                    video.pause();
                    // 截图画入canvas中
                    canvasCtx.drawImage(video, 0, 0, videoWidth, videoHeight, 0, 0, imgWidth, imgHeight);
                    // 把canvas中的图片转为URL字符串——获取图片的base64格式
                    var dataUrl = canvas.toDataURL("image/png"); 
                    // 通过上一篇文章的：https://www.haorooms.com/post/js_file_base64_blob 把base64转换为file
                    // base64转file——
                    const base64ConvertFile = function (urlData, filename) {                        
                        if (typeof urlData != 'string') {
                            this.$toast("urlData不是字符串")
                            return;
                        }
                        var arr = urlData.split(',')
                        var type = arr[0].match(/:(.*?);/)[1]
                        var fileExt = type.split('/')[1]
                        var bstr = atob(arr[1])
                        var n = bstr.length
                        var u8arr = new Uint8Array(n)
                        while (n--) {
                            u8arr[n] = bstr.charCodeAt(n);
                        }
                        return new File([u8arr], 'filename.' + fileExt, {
                            type: type
                        });
                    }
                    that.picinfo = base64ConvertFile(dataUrl,'test')
                    console.log(that.picinfo)
                    // 上传保存图片
                    var picform = new FormData()
                    picform.append('picform',that.picinfo)
                    let url = `http://127.0.0.1:8085/upload?type=pic&md5Val=${that.md5}&name=111&assettype=${that.asset_type}&remark=${that.remark}&filename=${that.picinfo.name}`
                    that.instance.post(url,picform).then(res=>{
                        that.$message({
                        message:'上傳成功'
                        })
                        setTimeout(()=>{
                            window.location.reload()
                            this.$router.go(0)
                        },2000)
                    })
                }, 3000);// 1000毫秒，就是截取第一秒，2000毫秒就是截取第2秒，视频1秒通常24帧，也可以换算成截取第几帧。
            });
        },
    },
}
</script>