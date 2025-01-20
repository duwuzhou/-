<!-- eslint-disable -->
<script setup>
import { ref } from 'vue'

const prefixes = ref('')

const handleSubmit = () => {
  try {
    console.log('Raw prefixes:', prefixes.value)
    
    const processedPrefixes = prefixes.value
      .split('\n')
      .map(prefix => {
        // Extract full 7-digit number before "号段"
        const fullNumber = prefix.match(/^(\d{7})号段/)?.[1] || ''
        // Take last 4 digits
        return fullNumber.slice(-4)
      })
      .filter(Boolean) // Remove empty strings
      .join('\n')
    
    // Update textarea with processed prefixes
    prefixes.value = processedPrefixes
    console.log('Processed prefixes:', processedPrefixes)
  } catch (error) {
    console.error('Error processing prefixes:', error)
    prefixes.value = '处理出错，请检查输入格式'
  }
}
</script>

<template>
  <div class="index1">
    <h1>号段处理</h1>
    <p>提交后将直接输入到输入框</p>
    <textarea
      placeholder="请输入号段"
      v-model="prefixes"
    ></textarea>
    <br>
    <button @click="handleSubmit">提交</button>
  </div>
</template>

<style scoped>
.index1 {
  text-align: center;
  margin-top: 50px;
  
  h1 {
    font-size: 36px;
    color: #333;
    margin-bottom: 20px;
  }

  textarea {
    width: 600px;
    height: 400px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    white-space: pre-wrap;
    overflow-y: auto;
    resize: vertical;
    font-family: inherit;
    font-size: 16px;
  }

  button {
    width: 100px;
    height: 40px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;    
  }
}

@media (max-width: 768px) {
  .index1 {
    margin-top: 20px;
    
    h1 {
      font-size: 24px;
      margin-bottom: 15px;
    }

    textarea {
      width: 90%;
      height: 300px;
      font-size: 14px;
      padding: 8px;
      margin-bottom: 15px;
    }

    button {
      width: 80px;
      height: 36px;
      font-size: 14px;
    }
  }
}
</style>
