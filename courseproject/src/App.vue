<template>
  <el-container >
    <el-aside width="200px" class="leftNav">
      <el-menu :default-openeds="['1', '3']" class="leftMenu">
        <el-sub-menu index="1">
          <template #title><i class="el-icon-info"></i>前言</template>
          <router-link class="linkStyle" to="/introduce">
            <el-menu-item index="1-1-1">介绍</el-menu-item>
          </router-link>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title><i class="el-icon-more"></i>HTML</template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <router-link class="linkStyle" to="/about">
              <el-menu-item index="2-1">About</el-menu-item>
            </router-link>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="2-4">
            <template #title>选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title><i class="el-icon-more"></i>CSS</template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="3-4">
            <template #title>选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title><i class="el-icon-more"></i>JavaScript</template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="3-4">
            <template #title>选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container  class="contentMain">
    <el-header class="topHeader">
      <span>前端教程</span>
    </el-header>

    <el-main>
      <router-view/>
    </el-main>
  </el-container>

  </el-container>
</template>

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
