<template>
  <div class="showAnim leftIntroDiv">
    <h2>区块介绍</h2>
    <p>我们经常用类似与div的标签来将各种元素分区，以方便布局和编写样式。</p>
    <div class="showBox">
      <div>
        <h5>代码样例：</h5>
        <div>
              <pre v-highlight>
                  <code class="lang-html">
                      {{ divExample }}
                  </code>
              </pre>
        </div>
      </div>
      <div>
        <h5>样例结果:</h5>
        <div class="tabBoxs">
          <div style="background-color: #42b983;width: 40%;height: 100px;color:white;" >
            <span>大区块</span>
            <div style="background-color: darkred;width: 20%;height: 40px;color:white;margin: 0;float: left;margin: 20px">
              <span>小区块一</span>
            </div>
            <div style="background-color: #2c3e50;width: 20%;height: 40px;color:white;margin: 0;float: left;margin: 20px">
              <span>小区块二</span>
            </div>
          </div>
          <div style="clear: both;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DivTag",
  data(){
    return{
      divExample:"\n          <div style=\"background-color: #42b983;width: 40%;height: 100px;color:white;\" >\n" +
          "            <span>大区块</span>\n" +
          "            <div style=\"background-color: darkred;width: 20%;height: 40px;color:white;margin: 0;float: left;margin: 20px\">\n" +
          "              <span>小区块一</span>\n" +
          "            </div>\n" +
          "            <div style=\"background-color: #2c3e50;width: 20%;height: 40px;color:white;margin: 0;float: left;margin: 20px\">\n" +
          "              <span>小区块二</span>\n" +
          "            </div>\n" +
          "          </div>"
    }
  }
}
</script>

<style scoped>

</style>