<template>
  <div class="showAnim leftIntroDiv">
    <h2>表格标签介绍</h2>
    <p>表格由 &lt;table&gt; 标签来定义。每个表格均有若干行（由 &lt;tr&gt; 标签定义），每行被分割为若干单元格（由 &lt;td&gt; 标签定义）。字母 td 指表格数据（table
      data），即数据单元格的内容。数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。</p>
    <div class="showBox">
      <div>
        <h5>代码样例:</h5>
        <div>
              <pre v-highlight>
                  <code class="lang-html">
                      {{ tableExample }}
                  </code>
              </pre>
        </div>
      </div>
      <div>
        <h5>样例结果:</h5>
        <div class="tabBoxs">
          <table border="1">
            <thead>
            <tr>
              <th>名称</th>
              <th>数量</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
              <td>总和</td>
              <td>3000</td>
            </tr>
            </tfoot>
            <tbody>
            <tr>
              <td>项目一</td>
              <td>1100</td>
            </tr>
            <tr>
              <td>项目二</td>
              <td>1900</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h5>表格标签解释:</h5>
        <div>
          <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="标签"/>
          <el-table-column prop="effect" label="功能"/>
        </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableTag",
  data() {
    return {
      tableExample: "\n          <table border=\"1\">\n" +
          "            <thead>\n" +
          "            <tr>\n" +
          "              <th>名称</th>\n" +
          "              <th>数量</th>\n" +
          "            </tr>\n" +
          "            </thead>\n" +
          "            <tfoot>\n" +
          "            <tr>\n" +
          "              <td>总和</td>\n" +
          "              <td>3000</td>\n" +
          "            </tr>\n" +
          "            </tfoot>\n" +
          "            <tbody>\n" +
          "            <tr>\n" +
          "              <td>项目一</td>\n" +
          "              <td>1100</td>\n" +
          "            </tr>\n" +
          "            <tr>\n" +
          "              <td>项目二</td>\n" +
          "              <td>1900</td>\n" +
          "            </tr>\n" +
          "            </tbody>\n" +
          "          </table>",
      tableData:[{
        name:"<table>",
        effect:'定义表格'
      },{
        name:"<th>",
        effect:'定义表格的表头'
      },{
        name:"<tr>",
        effect:'定义表格的行'
      },{
        name:"<td>",
        effect:'定义表格单元'
      },{
        name:"<caption>",
        effect:'定义表格标题'
      },{
        name:"<thead>",
        effect:'定义表格的页眉'
      },{
        name:"<table>",
        effect:'定义表格'
      },{
        name:"<tbody>",
        effect:'定义表格的主体'
      },{
        name:"<tfoot>",
        effect:'定义表格的页脚'
      },]
    }
  }
}
</script>

<style scoped>

</style>