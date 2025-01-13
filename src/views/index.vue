<!-- eslint-disable -->
<template>
  <div class="index">
    <textarea placeholder="电话前三位" v-model="q3" rows="1"></textarea>
    <br>
    <textarea placeholder="电话中间4位" v-model="q4" rows="1" class="q4"></textarea>
    <br>
    <textarea placeholder="电话后2位" v-model="h2" rows="1"></textarea>
    <br>
    <!-- 生成电话号码 -->
    <button @click="generatePhone()">生成手机号</button>

    <div class="generated-numbers" v-if="generatedNumbers.length > 0">
      <h3>生成的电话号码：</h3>
      <ul class="phone-numbers">
        <li v-for="(number, index) in generatedNumbers.slice(0, 200)" :key="index">{{ number }}</li>
      </ul>
    </div>
    <!-- 导出为 Excel -->
    <button @click="exportToExcel()" v-if="generatedNumbers.length > 0">导出为 Excel</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import * as XLSX from 'xlsx'

const q3 = ref('')
const q4 = ref('')
const h2 = ref('')
const generatedNumbers = ref([])

function generatePhone() {
  generatedNumbers.value = [] // 清空之前的生成结果

  // 将 q4 的值按回车符分割成数组
  const q4Array = q4.value.split('\n')

  for (let i = 0; i < q4Array.length; i++) {
    const q3Value = q3.value
    const q4Value = q4Array[i]
    const h2Value = h2.value

    // 生成0到99的所有组合
    for (let j = 0; j < 100; j++) {
      const lastTwoDigits = j.toString().padStart(2, '0') // 确保是两位数
      const phoneNumber = `${q3Value}${q4Value}${lastTwoDigits}${h2Value}`

      // 增加电话号码格式验证
      if (!/^\d{11}$/.test(phoneNumber)) {
      console.error('电话号码格式不正确，应为11位数字')
        alert('电话号码格式不正确，应为11位数字')
      return // 停止生成
      }

    generatedNumbers.value.push(phoneNumber)
    }
  }
}

function exportToExcel() {
  // 生成符合模板的数据
  const data = [
    ['姓名', 'QQ号', '家庭手机'], // 表头
    ...generatedNumbers.value.map(number => [number, '', number]) // 数据行
  ]
  // 将数据转换为 Excel 工作表
  const ws = XLSX.utils.aoa_to_sheet(data)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'PhoneNumbers')

  // 导出为 Excel 文件
  XLSX.writeFile(wb, 'phone_numbers.xlsx')
}
</script>

<style scoped>
.index {
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  width: 300px;
  max-width: 100%;
  box-sizing: border-box;
}

.index textarea {
  display: block;
  margin-bottom: 10px;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none; /* 禁止用户手动调整大小 */
  overflow: hidden; /* 隐藏滚动条 */
}

.index textarea:focus {
  outline: none; /* 去掉聚焦时的默认边框 */
  border-color: #4CAF50; /* 聚焦时的边框颜色 */
}

.index textarea.q4 {
  background-color: #f9f9f9; /* 特定背景颜色 */
  max-height: 400px; /* 最大高度 */
  height: 150px; /* 高度撑满 */
  overflow-y: auto; /* 显示滚动条 */
}

.index button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;
}

.index button:hover {
  background-color: #45a049;
}

.generated-numbers {
  max-height: 200px; /* 最大高度为100px */
  overflow-y: auto; /* 显示滚动条 */
}

.phone-numbers {
  list-style-type: none; /* 去掉列表前的圆点 */
  padding: 0;
  margin: 0;
  }

.phone-numbers li {
  padding: 5px 0; /* 每个电话号码之间的间距 */
  }

@media (max-width: 400px) {
  }
  .index textarea,
  .index button {
    font-size: 14px;
  }
  .index textarea.q4 {
    font-size: 25px; /* 响应式字体大小 */
    max-height: 400px; /* 响应式高度 */
    height: 150px; /* 响应式高度 */
    overflow-y: auto; /* 响应式滚动条 */
  }

  .index textarea {
    font-size: 25px;
}

</style>