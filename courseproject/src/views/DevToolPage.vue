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
          <el-tab-pane label="元素（Elements）" name="first">
            <div class="tabBoxs">
              <div>
                <ul>
                  <li>
                    可通过右键想要查看的元素或者点击开发者工具左上角的箭头来查看具体位置的元素。
                  </li>
                  <li>
                    定位到想要查看的元素后可以在右边观察到元素的style等属性，可通过修改style来查看效果，此时的修改不影响到代码。
                  </li>
                </ul>
              </div>
              <div class="eleImg">
                <img src="../assets/static/img/ELements.png">
              </div>


            </div>
          </el-tab-pane>
          <el-tab-pane label="控制台（Console）" name="second">
            <div class="tabBoxs">
              test2
            </div>
          </el-tab-pane>
          <el-tab-pane label="源代码（Sources）" name="third">
            <div class="tabBoxs">
              test3
            </div>
          </el-tab-pane>
          <el-tab-pane label="网络（Network）" name="fourth">
            <div class="tabBoxs">
              test4
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevToolPage",
  data() {
    return {
      activeName: 'first',

    }
  },
}
</script>

<style scoped>

</style>