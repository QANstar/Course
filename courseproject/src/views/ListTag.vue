<template>
  <div class="showAnim leftIntroDiv">
    <h2>列表标签介绍</h2>
    <p>列表标签能产生一个工整的纵向列表（可通过css修改成横向），HTML支持有序和无序列表。</p>
    <div class="showBox">
      <div>
        <h5>代码样例：</h5>
        <div>
              <pre v-highlight>
                  <code class="lang-html">
                      {{ listExample }}
                  </code>
              </pre>
        </div>
      </div>
      <div>
        <h5>样例结果:</h5>
        <div class="tabBoxs">
          <h6>无序列表：</h6>
          <ul>
            <li>列一</li>
            <li>列二</li>
          </ul>
          <h6>有序列表：</h6>
          <ol>
            <li>列一</li>
            <li>列二</li>
          </ol>
          <h6>自定义列表：</h6>
          <dl>
            <dt>列一项目</dt>
            <dd>列一项目描述</dd>
            <dt>列二项目</dt>
            <dd>列二项目描述</dd>
          </dl>
        </div>
      </div>
      <div>
        <h5>表格标签解释:</h5>
        <div>
          <el-table :data="listData" border style="width: 100%">
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
  name: "ListTag",
  data() {
    return {
      listExample: '\n        <div>\n' +
          '          <h6>无序列表：</h6>\n' +
          '          <ul>\n' +
          '            <li>列一</li>\n' +
          '            <li>列二</li>\n' +
          '          </ul>\n' +
          '          <h6>有序列表：</h6>\n' +
          '          <ol>\n' +
          '            <li>列一</li>\n' +
          '            <li>列二</li>\n' +
          '          </ol>\n' +
          '          <h6>自定义列表：</h6>\n' +
          '          <dl>\n' +
          '            <dt>列一项目</dt>\n' +
          '            <dd>列一项目描述</dd>\n' +
          '            <dt>列二项目</dt>\n' +
          '            <dd>列二项目描述</dd>\n' +
          '          </dl>\n' +
          '        </div>',
      listData: [{
        name: '<ol>',
        effect: '定义有序列表'
      }, {
        name: '<ul>',
        effect: '定义无序列表'
      }, {
        name: '<li>',
        effect: '定义列表项'
      }, {
        name: '<dl>',
        effect: '定义列表'
      }, {
        name: '<dt>',
        effect: '自定义列表项目'
      }, {
        name: '<dd>',
        effect: '定义自定列表项的描述'
      },]
    }
  }
}
</script>

<style scoped>

</style>