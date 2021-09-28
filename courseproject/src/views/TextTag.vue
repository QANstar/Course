<template>
  <div class="showAnim leftIntroDiv">
    <h2>文本标签介绍</h2>
    <p>文本标签是指用与显示文字或处理文字的标签</p>
    <div class="showBox">
      <div>
        <h5>常用文本标签：</h5>
        <el-table :data="textData" border style="width: 100%">
          <el-table-column prop="name" label="标签"/>
          <el-table-column prop="effect" label="功能"/>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextTag",
  data() {
    return {
      textData: [{
        name: '<br>',
        effect: '强制让文本换行',
      },{
        name: '<p></p>',
        effect: '段落标签，用于显示一段文本',
      },{
        name: '<b></b>',
        effect: '加粗标签',
      },{
        name: '<strong></strong>',
        effect: '加粗标签',
      },{
        name: ' <i></i>',
        effect: '文字斜体',
      },{
        name: '<a></a>',
        effect: '超链接，里面可定义需要跳转的链接',
      },{
        name: '<code><code>',
        effect: '表示此段是程序代码',
      },{
        name: '<pre></pre>',
        effect: '预格式化。就是你敲在源码里是什么格式。在页面上就显示什么格式。一般跟code配合使用。',
      },{
        name: '<hx></hx>',
        effect: '标题标签，其中x处可填从1-6的数值，对应不同大小的标题。',
      }]
    }
  }
}
</script>

<style scoped>

</style>