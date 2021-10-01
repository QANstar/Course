<template>
  <div class="showAnim leftIntroDiv">
    <h2>CSS介绍</h2>
    <div class="showBox">
      <div>
        <h3>简介</h3>
        <p>CSS主要辅助编写网页的样式，负责网页的美化</p>
      </div>
      <div>
        <h3>语法</h3>
        <p>CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明</p>
        <ul>
          <li>选择器通常是您需要改变样式的 HTML 元素。选择器通常可以选择HTML元素，Class和Id。</li>
          <li>每条声明由一个属性和一个值组成。</li>
          <li>属性（property）是您希望设置的样式属性。每个属性有一个值。属性和值被冒号分开。</li>
        </ul>
      </div>
      <div>
        <h3>样例</h3>
        <div>
              <pre v-highlight>
                  <code class="lang-css">
                      {{ cssExample }}
                  </code>
              </pre>
        </div>
      </div>
      <div>
        <h3>创建</h3>
        <p>插入样式表的方法有三种:</p>
        <div class="demo-collapse">
          <el-collapse>
            <el-collapse-item title="外部样式表" name="1">
              <div>
                <p>
                  当样式需要应用于很多页面时，外部样式表将是理想的选择。在使用外部样式表的情况下，你可以通过改变一个文件来改变整个站点的外观。每个页面使用link标签链接外部css文件到样式表。link标签在（文档的）头部。这个方法比较推荐。</p>
                <div>
              <pre v-highlight>
                  <code class="lang-html">
                      {{ cssExLinkExample }}
                  </code>
              </pre>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="内部样式表" name="2">
              <div>
                <p>当单个文档需要特殊的样式时，你可以使用内部样式表。你可以使用 style 标签在HTML文档头部定义内部样式表。</p>
                <div>
              <pre v-highlight>
                  <code class="lang-html">
                      {{ cssInLinkExample }}
                  </code>
              </pre>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="内联样式" name="3">
              <div>
                <p>内联样式是直接写在标签内部CSS样式。由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势。请慎用这种方法。你可以在标签内添加style属性来添加内联样式。</p>
                <div>
              <pre v-highlight>
                  <code class="lang-html">
                      {{ cssInlineLinkExample }}
                  </code>
              </pre>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CssIntroduce",
  data() {
    return {
      cssExample: '\n/*选择HTML元素*/\n' +
          'body {\n' +
          '    margin: 0 !important;\n' +
          '}\n' +
          '\n' +
          '/*选择class*/\n' +
          '.el-sub-menu__title {\n' +
          '    display: flex;\n' +
          '    align-items: center;\n' +
          '    justify-content: center;\n' +
          '}\n' +
          '\n' +
          '/*选择id*/\n' +
          '#a{\n' +
          '    color: #2c3e50;\n' +
          '}',
      cssExLinkExample:'<link rel="stylesheet" href="./css/shubiao.css" type="text/css">',
      cssInLinkExample:'\n<head>\n' +
          '<style>\n' +
          'hr {color:sienna;}\n' +
          'p {margin-left:20px;}\n' +
          'body {background-image:url("images/back40.gif");}\n' +
          '</style>\n' +
          '</head>',
      cssInlineLinkExample:'<p style="color:sienna;margin-left:20px">这是一个段落。</p>',
    }
  },
}
</script>

<style scoped>

</style>