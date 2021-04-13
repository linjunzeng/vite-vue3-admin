<template>
  <div>
    <div>{{$store.state.aa}}</div>
    <input type="text" placeholder="">
    <el-button type="primary" @click="change">el-button</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { getList } from '../api'
export default defineComponent({
  setup(){
    /* getList({
      aa: 123
    }) */
  },
  methods: {
    change(){
      this.$store.dispatch('changeBB', '456')
      console.log(1);
      // this.$store.commit('changeAA', '456')
    }
  }
})
</script>