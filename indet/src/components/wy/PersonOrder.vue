<template>
  <div class="box">
    <PersonalPuslt></PersonalPuslt>
    <div class="order">
      <h2>
        <span>
          近期订单列表
        </span>
      </h2>
      <div class="boxen">
        <div>
          <el-select class="box-seach" v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="全部订单" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-select class="box-seach" v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="全部" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
        </div>
        <div style="margin: 14px 6px 0 0;">
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-button slot="append" @click="inquire">查询</el-button>
          </el-input>
        </div>
      </div>
      <el-table
              :data="tableData3"
              style="width: 100%"
              border
              height="174"
              size="small"
              :row-class-name="tableRowClassName">
        <el-table-column
                fixed
                prop="id"
                label="订单编号"
                width="180"
                height="50"
                max-height="50"
                size="small">
        </el-table-column>
        <el-table-column
                prop="datetime"
                label="购买时间"
                width="179"
                height="50"
                max-height="50">
        </el-table-column>
        <el-table-column
                prop="csentence"
                label="商品名称"
                width="180"
                height="50"
                max-height="50">
        </el-table-column>
        <el-table-column
                prop="intege"
                label="数量"
                width="80"
                height="50"
                max-height="50">
        </el-table-column>
        <el-table-column
                prop="integer"
                label="单价"
                width="80"
                height="50"
                max-height="50">
        </el-table-column>
        <el-table-column
                prop="price"
                label="订单金额"
                width="100"
                height="50"
                max-height="50">
        </el-table-column>
        <el-table-column
                prop="status"
                label="交易状态"
                width="100"
                height="50"
                max-height="50"
                size="small">
        </el-table-column>
        <el-table-column
                prop="zip"
                label="操作"
                width="80"
                height="50"
                max-height="50"
                size="small">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PersonalPuslt from './PersonalPuslt'
export default {
  name: 'PersonOrder',
  data () {
    return {
      tableData3: undefined,
      input5: '',
      select: ''
    }
  },
  computed: {
    ...mapState(['information'])
  },
  components: {
    PersonalPuslt // 获取数据
  },
  methods: {
    tableRowClassName ({row, rowIndex}) {
      return 'warning-row'
    },
    Personal (vn) {
      if (vn === '') {
        alert(vn)
      } else {
        this.tableData3 = this.information
        console.log(this.tableData3)
      }
    },
    inquire () {
      this.Personal(this.input5)
      console.log(this.input5)
      // console.log(this.tableData3.search(this.input5))
      // for (i = 0, i < this.tableData3.length, i++) {
      //   if(this.tableData3[i].id.search(this.input5) === -1) {
      //     console.log(0)
      //   }
      // }
      console.log(this.tableData3)
    }
  },
  created () {
    this.Personal()
  }
}
</script>

<style lang="less">
.box{
  .order{
    h2{
      margin-top: 34px;
      padding: 0px 0 0 0;
      height: 30px;
      line-height: 30px;
      width: 100%;
      border-bottom: 1px solid #efefef;
      span{
        display: inline-block;
        position: relative;
        height: 29px;
        top: -2px;
        padding: 0 10px 0 14px;
        font-size: 16px;
        font-weight: normal;
        color: #ff3c1b;
        border-bottom: 1px solid #ff3c1b;
      }
    }
    .boxen{
      width: 980px;
      display: flex;
      justify-content: space-between;
      .input-with-select{
        width: 300px;
        .el-input__inner{
          width: 300px;
        }
      }
      .box-seach{
        width: 150px;
        padding: 14px 0 24px 0;
        margin-right: 14px;
      }
    }
  }
}
  .warning-row{
    display: inline-block;
    width: 980px;
    height: 47px;
    overflow: hidden;
    td{
      padding: 0!important;
      // border-bottom: 1px solid #000;
      &:nth-of-type(1){
        width: 180px;
      }
      &:nth-of-type(2){
        width: 179px;
      }
      &:nth-of-type(3){
        width: 180px;
      }
      &:nth-of-type(4){
        width: 80px;
      }
      &:nth-of-type(5){
        width: 80px;
      }
      &:nth-of-type(6){
        width: 100px;
      }
      &:nth-of-type(7){
        width: 100px;
      }
      &:nth-of-type(8){
        width: 80px;
      }
    }
  }
</style>
