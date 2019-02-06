<template>
  <div>
    <PersonalPuslt></PersonalPuslt>
    <el-tabs type="border-card">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">头像设置</el-tab-pane>
      <el-tab-pane label="角色管理">兴趣爱好</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import PersonalPuslt from './PersonalPuslt'
export default {
  name: 'PersonInfo',
  components: {
    PersonalPuslt
  }
}
</script>

<style scoped lang="less">

</style>
