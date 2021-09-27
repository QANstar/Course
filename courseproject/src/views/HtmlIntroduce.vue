<template>
  <div class="showAnim leftIntroDiv">
    <h2>HTML5介绍</h2>
    <div class="showBox">
      <div>
        <h3>简介</h3>
        <p>超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。他是用各种约定好的标记来对网页进行编写和排版而没有数据和逻辑结构。</p>
        <p>Html是网页的骨架，定义着网页的结构。</p>
      </div>
      <div>
        <h3>基本模板</h3>
        <div style="line-height: 25px">
              <pre v-highlight>
                  <code class="lang-html">
                      {{ htmlExample }}
                  </code>
              </pre>
        </div>
        <p>HTML的标签通常有头尾两个标记。例如：段落标签 &lt;p&gt; &lt;/p&gt;。也存在只有一个标记的标签。例如：水平分割线标签&lt;hr&gt;</p>
      </div>
      <div>
        <h3>html标签</h3>
        <p>&lt;html&gt;&lt;/html&gt; 此标签是HTML的根标签，里面包含了所有HTML的其它标签。通常带有开头&lt;html&gt;和结尾&lt;/html&gt;</p>
      </div>
      <div>
        <h3>head标签</h3>
        <p>&lt;head&gt;&lt;/head&gt; 标签用于定义文档的头部，它是所有头部元素的容器。</p>
      </div>
      <div>
        <h3>常用的头部元素（head）</h3>
        <div>
          <el-tabs v-model="activeName">
            <el-tab-pane label="title" name="first">
              <div class="tabBoxs">
                <p>用于定义网页的标题。比如&lt;title&gt;用户管理&lt;/title&gt; 在网页上的显示为</p>
                <img src="../assets/static/img/Title.png">
              </div>
            </el-tab-pane>
            <el-tab-pane label="link" name="second">

              <div class="tabBoxs">
                <p>用于链接外部的CSS文件等外部资源。例如</p>
                <div>
              <pre v-highlight>
                  <code class="lang-html">
                      {{ linkExample }}
                  </code>
              </pre>
                </div>
                <div>
                  <h5>常用属性：</h5>
                  <el-table :data="linkData" border style="width: 50%">
                    <el-table-column prop="name" label="属性"/>
                    <el-table-column prop="text" label="描述"/>
                  </el-table>
                </div>
              </div>

            </el-tab-pane>
            <el-tab-pane label="script" name="third">
              <div class="tabBoxs">
                <p>用于在HTML中插入一段JavaScript或者连接外部JavaScript,例如</p>
                <div>
              <pre v-highlight>
                  <code class="lang-html">
                      {{ jsExample }}
                  </code>
              </pre>
                </div>
                <div>
                  <h5>常用属性：</h5>
                  <el-table :data="jsData" border style="width: 50%">
                    <el-table-column prop="name" label="属性"/>
                    <el-table-column prop="text" label="描述"/>
                  </el-table>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="style" name="fourth">
              <div class="tabBoxs">
                <p>用于在HTML内部编写标签的样式。例如</p>
                <div>
              <pre v-highlight>
                  <code class="lang-html">
                      {{ cssExample }}
                  </code>
              </pre>
                </div>

              </div>
            </el-tab-pane>
            <el-tab-pane label="meta" name="Fifth">
              <div class="tabBoxs">
                <p>元数据（Metadata）是数据的数据信息。</p>
                <p>meta标签提供了 HTML 文档的元数据。元数据不会显示在客户端，但是会被浏览器解析。</p>
                <h3>常用用法:</h3>
                <div>
              <pre v-highlight>
                  <code class="lang-html">
                      {{ metaExample }}
                  </code>
              </pre>
                </div>
                <div>
                  <h5>常用属性：</h5>
                  <el-table :data="metaData" border style="width: 50%">
                    <el-table-column prop="name" label="属性"/>
                    <el-table-column prop="text" label="描述"/>
                  </el-table>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
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
      htmlExample:
          `
  <!DOCTYPE html>
  <html lang="zh">
  <head>
  <meta charset="UTF-8">
  <title>Title</title>
  </head>
  <body>
   内容
  </body>
  </html>`,
      linkExample: "<link rel=\"stylesheet\" type=\"text/css\" href=\"theme.css\" />",
      linkData: [{
        name: 'href',
        text: '定义被链接文档的位置。',
      }, {
        name: 'rel',
        text: '定义当前文档与被链接文档之间的关系。',
      }, {
        name: 'type',
        text: '规定被链接文档的 MIME 类型。',
      }],
      jsExample: "\n//插入外部js\n<script type=\"text/javascript\" src=\"../static/js/jquery-3.3.1.min.js\">< /script> \n " +
          "//插入一段JavaScript\n<script type=\"text/javascript\">\n" +
          "\tConsole.log(\"Hello World!\")\n" +
          "< /script>\n",
      jsData: [{
        name: 'src',
        text: '规定外部脚本文件的 URL。',
      }, {
        name: 'type',
        text: '指示脚本的 MIME 类型。',
      }],
      cssExample: '\n//编写标签的样式\n<style>\n' +
          '\th1 {color:red}\n' +
          '\tp {color:blue}\n' +
          '</style>\n',
      metaExample: '\n//定义文档关键词，用于搜索引擎：' +
          '\n' +
          '<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">\n' +
          '//定义web页面描述：' +
          '\n' +
          '<meta name="description" content="Free Web tutorials on HTML and CSS">\n' +
          '//定义页面作者：' +
          '\n' +
          '<meta name="author" content="Hege Refsnes">\n' +
          '//每30秒刷新页面：' +
          '\n' +
          '<meta http-equiv="refresh" content="30">',
      metaData:[{
        name: 'name',
        text: '把 content 属性关联到一个名称。。',
      }, {
        name: 'content',
        text: '定义与 http-equiv 或 name 属性相关的元信息。。',
      }, {
        name: 'charset',
        text: '定义文档的字符编码。',
      }, {
        name: 'http-equiv',
        text: '把 content 属性关联到 HTTP 头部。',
      }],

    }
  },
  mounted() {
  },
}
</script>

<style scoped>

</style>