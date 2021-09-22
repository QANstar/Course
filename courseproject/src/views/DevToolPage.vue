<template>
  <div class="showAnim leftIntroDiv">
    <h2>开发者工具介绍</h2>
    <div class="showBox">
      <h3>调出开发者工具</h3>
      <ul>
        <li>
          F12
        </li>
        <li>
          浏览器右键检查
        </li>
      </ul>
    </div>
    <div class="showBox">
      <h3>开发者工具简单介绍</h3>
      <p>开发者工具最常用的四个功能模块：元素（ELements）、控制台（Console）、源代码（Sources）、网络（Network）。</p>
      <div>
        <el-tabs v-model="activeName">
        <el-tab-pane label="元素（Elements）" name="first">User</el-tab-pane>
        <el-tab-pane label="控制台（Console）" name="second">Config</el-tab-pane>
        <el-tab-pane label="源代码（Sources）" name="third">Role</el-tab-pane>
        <el-tab-pane label="网络（Network）" name="fourth">Task</el-tab-pane>
      </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevToolPage"
}
</script>

<style scoped>

</style>