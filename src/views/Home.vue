<!-- eslint-disable -->
<template>
  <div class="home-page">
    <header class="header">
      <h1>电话生成程序</h1>
      <p class="subtitle">输入电话号码，点击生成即可</p>
      <p><a class="cl" href="https://telphone.cn/">查询号段网站</a> </p>
      <p><a class="cl" href="https://tool.lu/">ip查询工具</a></p>
      <p><a class="cl" href="https://www.iplocation.net/">ip定位工具</a></p>
      <p><a class="cl" href="https://qb.heikebook.com/index">q绑定查询</a></p>
    </header>
    
    <main class="main-content">
      <router-link class="btn" to="/RouterView/index">
        <span>电话生成程序</span>
        <svg class="icon" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </router-link>
      <br>
      <router-link class="btn" to="/RouterView/index1">
          <span>号段处理</span>
          <svg class="icon" viewBox="0 0 24 24"></svg>
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
      </router-link>

    </main>
  </div>

  <div class="footer">
    <p>Copyright © 2022 综合程序</p>
    <p>声明本网站一切内容只属于交流学习使用，不得用于任何商业用途，违者后果自负。</p>
  </div>
</template>

<script setup>

// Component logic can be added here when needed
</script>



<style scoped>
:root {
  --primary-color: #007bff;
  --primary-hover: #0056b3;
  --text-color: #2c3e50;
  --transition-speed: 0.3s;
}

.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 2rem;
  text-align: center;
}

.header {
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  animation: fadeInDown 0.5s ease-out;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  animation: fadeIn 0.8s ease-out;
}

.main-content {
  color: #000;
  animation: slideUp 0.5s ease-out;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: rgb(0, 0, 0);
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.1rem;
  transition: all var(--transition-speed) ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn:hover {
  background-color: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.icon {
  width: 1.2rem;
  height: 1.2rem;
  fill: currentColor;
}

.cl {
  color: #007bff;
  text-decoration: none;
  transition: all var(--transition-speed) ease;
}

.cl:hover {
  text-decoration: underline;
  }

  .footer {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f8f9fa;
    text-align: center;
    font-size: 0.8rem;
    color: #6c757d;
  }

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .btn {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .home-page {
    padding: 1rem;
  }
  
  .header h1 {
    font-size: 1.8rem;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }

  .footer {
    font-size: 0.7rem;

  }
}
</style>
