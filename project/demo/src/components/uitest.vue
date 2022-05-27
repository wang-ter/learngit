<template>
  <div>
      <h1>组件库页面————</h1>
      <div class="father">
                <!-- 1、评分 -->
          <div>1、评分:
              <br>
               <el-rate 
                v-model="rate"
                show-text
               ></el-rate>
          </div>
          <!-- 2、进度条 -->    
          <!-- <div>
                <el-progress :text-inside="true"  :stroke-width="26" :percentage="50"></el-progress>
                <br>
                <el-progress type="circle" :percentage="30"></el-progress>
                <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
                <el-button-group>
                    <el-button icon="el-icon-minus" @click="decrease"></el-button>
                    <el-button icon="el-icon-plus" @click="increase"></el-button>
                </el-button-group>       
          </div> -->
          <!-- 3、 -->
          <!-- <div style="width:400px;height:200px;border:solid 1px red">
              <el-slider
              style="position:relative;left:20px;"
              v-model="sliderdata"
              @input="getsliderdata()"
              ></el-slider>
          </div> -->
          <!-- 选择框 -->
          <div >
              <!-- <el-select v-model="selectdata" filterable>
                  <el-option
                  v-for="item in options"
                  :key="item.value"
                  :value = "item.value"
                  :label = "item.label"
                  >
                  </el-option>
              </el-select>


              <el-select v-model="select1">
                  <el-option-group
                  v-for="group in groupoptions"
                  :key="group.label"
                  :label="group.label"
                  >
                    <el-option
                    v-for="item in group.options"
                    :key="item.value"
                    :value="item.value"
                    :label="item.label">
                    </el-option>
                  </el-option-group>
              </el-select> -->
          </div>
          <!-- 5、 -->
          <el-tree
  :data="data"
  show-checkbox>
</el-tree>
  <!-- 6、 -->

          <div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'uitest',
    data(){
        return{
             data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        // defaultProps: {
        //   children: 'children',
        //   label: 'label'
        // }
    //   };
            // rate:null,
            // percentage: 10,
            // colors: [
            //     {color: '#f56c6c', percentage: 20},
            //     {color: '#e6a23c', percentage: 40},
            //     {color: '#5cb87a', percentage: 60},
            //     {color: '#1989fa', percentage: 80},
            //     {color: '#6f7ad3', percentage: 100}
            // ],
            // sliderdata:'',
            // selectdata:'',
            // options:[{
            //     label:'第一个',
            //     value:1,
            // },{
            //     label:'第二个',
            //     value:2,
            // }],
            // select1:'',
            // groupoptions:[{
            //     label:'热门城市',
            //     options:[{
            //         label:'城市1',
            //         value:1,
            //     },{
            //         label:'城市2',
            //         value:2,
            //     }]
            // },{
            //     label:'热门小吃',
            //     options:[{
            //         label:'小吃1',
            //         value:3,
            //     },{
            //         label:'小吃2',
            //         value:4,
            //     }]
            // },{
            //     label:'热门风景',
            //     options:[{
            //         label:'风景1',
            //         value:5,
            //     },{
            //         label:'风景2',
            //         value:6,
            //     }]
            // }],
        }
    },
    created(){

    },
    methods:{
        // increase() {
        //     this.percentage += 10;
        //     if (this.percentage > 100) {
        //         this.percentage = 100;
        //     }
        // },
        // decrease() {
        //     this.percentage -= 10;
        //     if (this.percentage < 0) {
        //         this.percentage = 0;
        //     }
        // },
        // //  获取滑动条数据
        // getsliderdata(){

        // },
    },
}
</script>

<style>
.father{
    margin-top: 20px;
    margin-left: 20px;
    display: flex;
}

.father div{
    /* height: 200px; */
    width:200px;
    /* border:solid 1px red; */
}

.el-slider{
    border:solid 1px red;
}

 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

</style>