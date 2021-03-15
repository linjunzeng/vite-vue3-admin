<template>
  <div>
    <el-button type="primary">el-button</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { getList } from '@/api'

export default defineComponent({
  setup(){
    getList({
      aa: 123
    })
  }
})
</script>