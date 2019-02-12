<template>
  <div>
    <PersonalPuslt></PersonalPuslt>
    <el-tabs type="card">
      <el-tab-pane class="tabs" label="用户管理">
        <div>
          <div class="perfect">
          完善更多个人信息，有助于我们为您提供更加个性化的服务，大麦网将尊重并保护您的隐私。
          </div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="昵称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item
                    label="联系电话"
                    prop="age"
                    :rules="[
      { required: true, message: '请输入联系电话'},
      { type: 'number', length: 11, message: '联系电话必须为数字值'}
    ]"
            >
              <el-input type="age" v-model.number="ruleForm.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="ruleForm.region"></el-input>
            </el-form-item>
            <el-form-item label="生日" >
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item Danger label="性别" prop="">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio Danger label="男"></el-radio>
                <el-radio Danger label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-button class="button-save"  type="danger">保存</el-button>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane class="tabs" label="头像设置">
        <div>
          <img onclick="getElementById('file').click()" style="cursor:pointer;" title="点击添加图片" alt="点击添加图片" src="../../assets/wy-img/add-teacher2.png"><!--用来替换按钮的图片
-->
          <input type="file" multiple="multiple" id="file" name='file' style="height:0;width:0;z-index: -1; position: absolute;left: 10px;top: 5px;"/>
        </div>
      </el-tab-pane>
      <el-tab-pane class="tabs" label="兴趣爱好">兴趣爱好</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import PersonalPuslt from './PersonalPuslt'
export default {
  name: 'PersonInfo',
  data () {
    return {
      activeName2: 'first',
      ruleForm: {
        name: '',
        age: '',
        region: '',
        relation: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入昵称名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        // relation: [
        //   { required: true, message: '请输入联系电话', trigger: 'blur' },
        //   { type: 'number', message: '联系电话必须为数字值', trigger: 'blur' }
        // ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  },
  components: {
    PersonalPuslt
  }
}
</script>

<style lang="less">
  .el-tabs__nav{
    height: 30px;
    margin-top: 16px;
    border: none!important;
  }
  .el-tabs__header{
    margin: 0!important;
  }
  .el-tabs__nav-scroll{
    height: 30px;
    line-height: 30px;
    // margin-top: 16px;
    background: #fff;
    overflow: visible!important;
    .el-tabs__item{
      height: 30px;
      line-height: 30px;
      position: relative;
      left: 4px;
      overflow: hidden;
      background: #f8f8f9;
      border-radius: 2px;
      border: 1px solid #dddee1!important;
      &:nth-of-type(1){
        left: 0;
      }
      &:nth-of-type(3){
        left: 8px;
      }
    }
    .is-active{
      background: #fff!important;
      border-bottom: 1px solid #fff!important;
    }
  }
  .tabs{
    margin: 0 4px 10px 0;
    padding-top: 20px;
    border: 1px solid #dddee1;
    border-top: none;
    border-right: none;
    .perfect{
      width: 936px;
      height: 38px;
      line-height: 38px;
      color: #999;
      font-size: 12px;
      text-indent: 20px;
      background: #fffdee;
      border: 1px solid #edd28b;
    }
    .demo-ruleForm{
      width: 420px;
      padding-top: 14px;
      .el-input__inner{
        width: 320px!important;
      }
    }
    .button-save{
      margin-left: 120px;
    }
  }
  .demo-ruleForm{
    padding-bottom: 142px;
  }
</style>
