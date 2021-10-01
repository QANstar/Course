<template>
  <el-container>
    <el-aside width="200px" class="leftNav">
      <el-menu class="leftMenu">
        <el-sub-menu index="1">
          <template #title><i class="el-icon-info"></i>前言</template>
          <router-link class="linkStyle" to="/introduce">
            <el-menu-item index="1-1-1">准备</el-menu-item>
          </router-link>
          <router-link class="linkStyle" to="/devTool">
            <el-menu-item index="1-1-2">开发者工具</el-menu-item>
          </router-link>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title><i class="el-icon-more"></i>HTML</template>
          <router-link class="linkStyle" to="/htmlIntroduce">
            <el-menu-item index="2-1">简介</el-menu-item>
          </router-link>
          <el-menu-item-group title="body标签">
            <router-link class="linkStyle" to="/divTag">
              <el-menu-item index="2-3">区块</el-menu-item>
            </router-link>
            <router-link class="linkStyle" to="/textTag">
              <el-menu-item index="2-4">文本</el-menu-item>
            </router-link>
            <router-link class="linkStyle" to="/imgTag">
              <el-menu-item index="2-5">图像</el-menu-item>
            </router-link>
            <router-link class="linkStyle" to="/listTag">
              <el-menu-item index="2-6">列表</el-menu-item>
            </router-link>
            <router-link class="linkStyle" to="/tableTag">
              <el-menu-item index="2-7">表格</el-menu-item>
            </router-link>
            <router-link class="linkStyle" to="/formTag">
              <el-menu-item index="2-8">表单</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title><i class="el-icon-more"></i>CSS</template>
          <router-link class="linkStyle" to="/cssIntroduce">
            <el-menu-item index="3-1">简介</el-menu-item>
          </router-link>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title><i class="el-icon-more"></i>JavaScript</template>

        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container class="contentMain">
      <el-header class="topHeader">
        <div class="topMain">
          <div>
            <span>前端教程</span>
          </div>
          <div>
            <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-setting settingIcon"></i>
            </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    <span>鼠标粒子特效：</span>
                    <el-switch @click="mouseEffect" v-model="mouseValue" active-color="#13ce66"
                               inactive-color="#ff4949"/>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-main class="main">
        <router-view/>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      mouseValue: false,
    }
  },
  methods: {
    mouseEffect() {
      isUse = this.mouseValue;
    }
  }
}


var isUse = false;
(function (window, document) {
  var hearts = [];
  window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          setTimeout(callback, 1000 / 60);
        }
  })();
  init();

  function init() {
    css(".heart{width: 1px;height: 1px;position: fixed;pointer-events: none;z-index: 2000;");
    attachEvent();

    gameloop();
  }

  function gameloop() {
    for (var i = 0; i < hearts.length; i++) {
      if (hearts[i].alpha <= 0) {
        document.body.removeChild(hearts[i].el);
        hearts.splice(i, 1);
        continue;
      }
      hearts[i].y++;
      hearts[i].x += hearts[i].xx;
      hearts[i].scale -= 0.01;
      hearts[i].alpha -= 0.008;
      hearts[i].el.style.cssText = "left:" + hearts[i].x + "px;top:" + hearts[i].y + "px;opacity:" + hearts[i].alpha + ";transform:scale(" + hearts[i].scale + "," + hearts[i].scale + ") rotate(45deg);color:" + hearts[i].color;
    }
    requestAnimationFrame(gameloop);

  }

  function attachEvent() {
    var old = typeof window.onmousemove === "function" && window.onmousemove;
    window.onmousemove = function (event) {
      old && old();
      createHeart(event);
    }
  }

  function createHeart(event) {
    var d = document.createElement("samp");
    d.className = "heart";
    d.innerHTML = "*";
    hearts.push({
      el: d,
      x: event.clientX - 8,
      y: event.clientY - 13,
      xx: Math.pow(-1, (Math.round(Math.random()))) * Math.random(),
      scale: 1,
      alpha: 1,
      color: randomColor()
    });
    document.body.appendChild(d);
  }

  function css(css) {
    var style = document.createElement("style");
    style.type = "text/css";
    try {
      style.appendChild(document.createTextNode(css));
    } catch (ex) {
      style.styleSheet.cssText = css;
    }
    document.getElementsByTagName('head')[0].appendChild(style);
  }

  function randomColor() {
    if (isUse) {
      return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
    } else {
      return "rgba(0,0,0,0)";
    }

  }
})(window, document);

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
