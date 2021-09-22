<template>
  <div class="showAnim introBox">
    <el-card class="box-card introCard">
      <template #header>
        <div class="card-header">
          <span>教程介绍</span>
        </div>
      </template>
      <div>
        <p>
          本教程为双零团队前端教程，提供简单的web前端开发知识讲解。
        </p>
      </div>
    </el-card>
    <el-card class="box-card introCard">
      <template #header>
        <div class="card-header">
          <span>前端简介</span>
        </div>
      </template>
      <div>
        <p style="text-align: left;padding-left: 20px;padding-right: 20px;line-height: 40px">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前端主要负责网站的前台部分，是直接展现给用户的部分。前端技术一般分为前端设计和前端开发，前端设计可以理解为视觉设计，前端开发是网站前台代码的实现，如今前端开发最基本的技术为HTML、CSS和JavaScript。同时随着前端技术的发展，出现了许多强大的前端框架和插件，例如Vue、jQuery、React、Bootstrap等，他们提供了多简洁高效的功能和设计，能在使用中大幅的提高开发效率和开发质量。
        </p>
      </div>
    </el-card>
    <el-card class="box-card introCard">
      <template #header>
        <div class="card-header">
          <span>推荐软件</span>
        </div>
      </template>
      <div class="recommendList">
        <ul>
          <li>
            <span>浏览器：  </span>
            <span>Microsoft Edge  、</span>
            <span>Google Chrome</span>
          </li>
          <li>
            <span>代码编辑器：  </span>
            <span>Visual Studio Code  、</span>
            <span>PyCharm  、</span>
            <span>IntelliJ IDEA  </span>
          </li>
        </ul>
      </div>
    </el-card>
    <el-card class="box-card introCard">
      <template #header>
        <div class="card-header">
          <span>推荐教程</span>
        </div>
      </template>
      <div class="recommendList">
        <ul>
          <li>
            <span>菜鸟教程：  </span>
            <a href="https://www.runoob.com/html/html-tutorial.html" target="_blank">https://www.runoob.com/html/html-tutorial.html</a>
          </li>
          <li>
            <span>为初学者准备的 HTML 速成：</span>
            <a href="https://www.bilibili.com/video/BV1vs411M7aT" target="_blank">https://www.bilibili.com/video/BV1vs411M7aT</a>
          </li>
          <li>
            <span>为初学者准备的 CSS 速成：</span>
            <a href="https://www.bilibili.com/video/BV1bW411R7hg" target="_blank">https://www.bilibili.com/video/BV1bW411R7hg</a>
          </li>
          <li>
            <span>为初学者准备的 JavaScript 速成：</span>
            <a href="https://www.bilibili.com/video/BV1Jt411D7j6" target="_blank">https://www.bilibili.com/video/BV1Jt411D7j6</a>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Introduce"
}
</script>

<style scoped>

</style>