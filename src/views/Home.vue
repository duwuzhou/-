<!-- eslint-disable -->
<template>
  <div class="home">
    <h1>这是一个电话生成程序</h1>
    <br>
    <p>输入电话号码，点击生成即可</p>
    <router-link class="btn" to="/RouterView/index">点击跳转主程序</router-link>
  </div>
</template>
<script setup>

</script>



<style scoped>
.home {
  text-align: center; /* 居中 */
  position: relative; /* 使用相对定位 */
  height: 100%; /* 修改: 使容器高度占满整个视口高度 */
}

.home > * {
  position: relative; /* 修改: 从 absolute 改为 relative */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* 增加响应式布局 */
@media (max-width: 768px) {
  .home {
    height: auto; /* 在小屏幕上自动调整高度 */
  }
  .home > * {
    width: 90%; /* 减少宽度以适应小屏幕 */
    max-width: 600px; /* 设置最大宽度 */
  }
}

@media (max-width: 480px) {
  .home > * {
    width: 95%; /* 进一步减少宽度以适应更小的屏幕 */
  }
}

/* 添加按钮样式 */
.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

/* 添加按钮悬停效果 */
.btn:hover {
  background-color: #0056b3;
}
</style>