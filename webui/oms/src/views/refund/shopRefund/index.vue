<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="item in typeList" :label="item.name" :name="item.code" lazy>
        <refund-tao v-if="item.id === 100"></refund-tao>
        <refund-jd v-if="item.id === 200"></refund-jd>
        <refund-jdvc v-if="item.id === 280"></refund-jdvc>
        <refund-pdd v-if="item.id === 300"></refund-pdd>
        <refund-dou v-if="item.id === 400"></refund-dou>
        <refund-wei v-if="item.id === 500"></refund-wei>
        <after-sale-offline v-if="item.id === 999"></after-sale-offline>
      </el-tab-pane>
    </el-tabs>
<!--    <el-tabs v-model="activeName" @tab-click="handleClick">-->
<!--      <el-tab-pane label="天猫" name="taoOrder">-->
<!--        <tao-refund></tao-refund>-->

<!--      </el-tab-pane>-->
<!--      <el-tab-pane label="京东POP" name="jdOrder" lazy>-->
<!--        <refund-jd></refund-jd>-->
<!--      </el-tab-pane>-->
<!--      <el-tab-pane label="京东自营" name="jdvcOrder" lazy>-->
<!--        <refund-jdvc></refund-jdvc>-->
<!--      </el-tab-pane>-->
<!--      <el-tab-pane label="抖店" name="douOrder" lazy>-->
<!--        <dou-refund></dou-refund>-->
<!--      </el-tab-pane>-->
<!--      <el-tab-pane label="拼多多" name="pddOrder" lazy>-->
<!--        <pdd-refund></pdd-refund>-->
<!--      </el-tab-pane>-->
<!--    </el-tabs>-->
  </div>
</template>

<script>
import RefundTao  from "@/views/tao/refund/index";
import RefundJd  from "@/views/jd/refund/index";
import RefundJdvc  from "@/views/jd/refund/index-vc";
import RefundDou from "@/views/dou/refund/goods.vue";
import RefundPdd from "@/views/pdd/refund/goods.vue";
import RefundWei from "@/views/wei/refund/goods.vue"
import AfterSaleOffline from "@/views/offline/aftersale/goods.vue"
import {listPlatform} from "@/api/shop/shop";


export default {
  name: "refund",
  components:{
    RefundPdd, RefundDou, RefundTao,RefundJd,RefundJdvc,AfterSaleOffline,RefundWei},
  data() {
    return {
      activeName: '',
      typeList: [],
    };
  },
  created() {

  },
  mounted() {
    listPlatform({status:0}).then(res => {
      this.typeList = res.rows;
      this.activeName = this.typeList[0].code
    })
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
