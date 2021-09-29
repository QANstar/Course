<template>
  <div class="showAnim leftIntroDiv">
    <h2>表单标签介绍</h2>
    <p>HTML 表单用于收集不同类型的用户输入。</p>
    <p>表单是一个包含表单元素的区域。</p>
    <p>表单元素是允许用户在表单中输入内容,比如：文本域(textarea)、下拉列表、单选框(radio-buttons)、复选框(checkboxes)等等。</p>
    <div class="showBox">
      <div>
        <h5>常用表单标签：</h5>
        <div>
          <el-table :data="formData" border style="width: 100%">
            <el-table-column prop="name" label="标签"/>
            <el-table-column prop="effect" label="功能"/>
          </el-table>
        </div>
      </div>
      <div>
        <h5>代码样例：</h5>
        <div>
              <pre v-highlight>
                  <code class="lang-html">
                      {{ formExample }}
                  </code>
              </pre>
        </div>
      </div>
      <div>
        <h5>样例结果:</h5>
        <div class="tabBoxs">
          <form>
            <div>
              <label for="email">邮箱：</label>
              <input id="email" type="text" name="email"><br>
            </div>
            <div><label for="password">密码：</label>
              <input id="password" type="password" name="password"><br>
            </div>
            <div>
              <input type="radio" name="sex" value="male">男
              <input type="radio" name="sex" value="female">女<br>
            </div>
            <div>
              <input type="checkbox" name="check" value="SavePassword">保存密码
              <input type="checkbox" name="check" value="SaveEmail">保存邮箱<br>
            </div>
            <div>
              <input type="submit" value="提交">
              <input type="reset" value="重置">
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "FormTag",
  data() {
    return {
      formData: [{
        name: '<form>',
        effect: '定义供用户输入的表单'
      }, {
        name: '<input>',
        effect: '定义输入域'
      }, {
        name: '<textarea>',
        effect: '定义文本域 (一个多行的输入控件)'
      }, {
        name: '<label>',
        effect: '定义了 <input> 元素的标签，一般为输入标题'
      }, {
        name: '<select>',
        effect: '定义了下拉选项列表'
      }, {
        name: '<option>',
        effect: '定义下拉列表中的选项'
      }, {
        name: '<button>',
        effect: '定义一个点击按钮'
      },],
      formExample:'\n          <form>\n' +
          '            <div>\n' +
          '              <label for="email">邮箱：</label>\n' +
          '              <input id="email" type="text" name="email"><br>\n' +
          '            </div>\n' +
          '            <div><label for="password">密码：</label>\n' +
          '              <input id="password" type="password" name="password"><br>\n' +
          '            </div>\n' +
          '            <div>\n' +
          '              <input type="radio" name="sex" value="male">男\n' +
          '              <input type="radio" name="sex" value="female">女<br>\n' +
          '            </div>\n' +
          '            <div>\n' +
          '              <input type="checkbox" name="check" value="SavePassword">保存密码\n' +
          '              <input type="checkbox" name="check" value="SaveEmail">保存邮箱<br>\n' +
          '            </div>\n' +
          '            <div>\n' +
          '              <input type="submit" value="提交">\n' +
          '              <input type="reset" value="重置">\n' +
          '            </div>\n' +
          '          </form>',
    }
  }
}
</script>

<style scoped>

</style>