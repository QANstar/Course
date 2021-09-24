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
                    定位到想要查看的元素后可以在右边观察到元素的style等属性，可通过修改style来查看样式效果，此时的修改不影响到代码。
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
              <div>
                <ul>
                  <li>
                    控制台负责输出JavaScript的Consolo.log()函数中的信息（其他类似的控制台输出方法同理）。主要负责网页的调试和测试。
                  </li>
                  <li>
                    各种报错、警告或者框架插件的信息也会在此显示。
                  </li>
                </ul>
              </div>
              <div class="eleImg">
                <img src="../assets/static/img/Consolo.png">
              </div>
            </div>

          </el-tab-pane>
          <el-tab-pane label="源代码（Sources）" name="third">
            <div class="tabBoxs">
              <div>
                <ul>
                  <li>
                    查看文件：在源代码（Source）页面可以查看到当前网页的所有源文件。在左侧栏中可以看到源文件以树结构进行展示。
                  </li>
                  <li>
                    添加断点：在源代码左边有行号，点击对应行的行号，就好给改行添加上一个断点（再次点击可删除断点）。右键点击断点，在弹出的菜单中选择Edit breakpoint可以给该断的添加中断条件。
                  </li>
                  <li>
                    中断调试：添加断点后，当JS代码运行到断点时会中断（对于添加了中断条件的断点在符合条件时中断），此时可以将光标放在变量上或者右边的侧栏上查看变量的。
                  </li>
                  <li>
                    在右侧变量上方，有继续运行、单步跳过等按钮，可以在当前断点后，逐行运行代码，或者直接让其继续运行。
                  </li>
                </ul>
              </div>
              <div class="eleImg">
                <img src="../assets/static/img/Source.png">
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="网络（Network）" name="fourth">
            <div class="tabBoxs">
              <div>
                <ul>
                  <li>
                    网络可以查看URL，响应状态码，响应数据类型，响应数据大小，响应时间等网络请求信息。
                  </li>
                  <li>
                    点击其中的某一个以后右边选择预览(Preview)可以浏览资源和数据。
                  </li>
                  <li>
                    点击其中的某一个以后右边选择标头(Hearders)可以显示文件的具体说明。
                  </li>
                </ul>
              </div>
              <div class="eleImg">
                <img src="../assets/static/img/Network1.png">
                <img src="../assets/static/img/Network2.png">
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="其他常用功能" name="Fifth">
            <div class="tabBoxs">
              <div>
                <ul>
                  <li>
                    在页面中选择元素进行检查：点击后可以在前端页面选择需要检查的元素，会在开发者工具元素一栏跳到相应代码。
                  </li>
                  <li>
                    切换手机或电脑设备仿真：点击会使浏览器显示在电脑端和手机端之间切换，方便进行各端开发。
                  </li>
                  <li>
                    停靠方向：在点开发者工具右上角的“···”后可以看到停靠方向选项，可以选择自己喜欢的位置摆放开发者工具。
                  </li>
                </ul>
              </div>
              <div class="eleImg">
                <img src="../assets/static/img/Other.png">
                 <img src="../assets/static/img/Phone.png">
                <div style="width: 70%;">
                  <p style="text-align: center">切换为手机端时的浏览器显示方式</p>
                </div>

              </div>
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
  mounted:function () {
    console.log("test")
  },
}
</script>

<style scoped>

</style>