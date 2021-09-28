<template>
  <div class="showAnim leftIntroDiv">
    <h2>图像标签介绍</h2>
    <p>在 HTML 中，图像由&lt;img&gt;标签定义。<br>&lt;img&gt;是空标签，意思是说，它只包含属性，并且没有闭合标签。<br>要在页面上显示图像，你需要使用源属性（src）。src 指 "source"。源属性的值是图像的 URL 地址。</p>
    <div class="showBox">
      <div>
        <h5>代码样例:</h5>
        <div>
              <pre v-highlight>
                  <code class="lang-html">
                      {{ imgExample }}
                  </code>
              </pre>
                </div>
      </div>
      <div>
        <h5>显示结果:</h5>
        <img src="../assets/static/img/Img1.png" style="width: 50%"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgTag",
  data(){
    return{
      imgExample:'<img src="../assets/static/img/Img1.png" style="width: 50%"/>',
    }
  }
}
</script>

<style scoped>

</style>