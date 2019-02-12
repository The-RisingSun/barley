<template>
  <div id="ticket">
    <PersonalPuslt></PersonalPuslt>
    <button class="btn">新建购票人</button>
    <el-table
            :data="tableData"
            style="width: 100%">
      <el-table-column
              label="日期"
              width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
              label="姓名"
              width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import PersonalPuslt from './PersonalPuslt'
export default {
  name: 'PersonTicket',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '你的',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  created () {
    this.getNewsList()
  },
  methods: {
    getNewsList () {
      console.log(0)
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  },
  components: {
    PersonalPuslt
  }
}
</script>

<style scoped lang="less">
#ticket{
  .btn{
     float: right;
     margin: 14px 0 20px 0;
     display: inline-block;
     height: 32px;
     padding: 0 14px;
     background: #ed3f14;
     border-radius: 2px;
     border: none;
     color: #fff;
     cursor: pointer;
   }
}
</style>
