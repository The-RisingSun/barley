<template>
  <div id="ticket">
    <PersonalPuslt></PersonalPuslt>
    <button class="btn" @click="newalis">新建购票人</button>
    <el-table
            ref="singleTable"
            border
            highlight-current-row
            :data="tableData"
            style="width: 100%">
      <el-table-column
              type="index"
              width="50">
      </el-table-column>
      <el-table-column
              label="姓名"
              width="256">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
              label="卡类型"
              width="250">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.calorie }}</span>
        </template>
      </el-table-column>
      <el-table-column
              label="身份证号"
              width="254">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
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
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'PersonTicket',
  data () {
    return {
      se: 0,
      contact: null
    }
  },
  created () {
    this.getNewsList()
    this.Personal()
  },
  computed: {
    ...mapState(['tableData'])
  },
  methods: {
    ...mapMutations(['setn']),
    Personal () {
      this.contact = this.tableData3
    },
    newalis () {
      this.$router.push({path: '/personal/NewList'})
    },
    getNewsList () {
      this.setn(3)
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      this.se = index - 1
      if (index === 0) {
        this.se = 1
      }
      this.tableData.splice(index, this.se)
    },
    PersonTicket (cen, i) {
      this.index = i
      this.setScroll(cen)
      this.$router.push({path: '/Personal/PersonTicket'})
    }
  },
  components: {
    PersonalPuslt
  }
}
</script>

<style lang="less">
.el-table_1_column_5, .el-table_1_column_1 {
  text-align: center!important;
}
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
