<template>
    <div class="main-box">
        <!-- 侧边 -->
        <side-bar class="side-bar" />
        <!-- 右侧 -->
        <div class="right-box">
            <!-- 顶部 -->
            <head-box class="head-box" />
            <!-- 选项卡 -->
            <tags-bar class="tags-bar" />
            <!-- 内容 -->
            <router-view class="content-box" />
        </div>
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue'
import sideBar from './components/sideBar.vue'
import headBox from './components/headBox.vue'
import tagsBar from './components/tagsBar.vue'

export default defineComponent({
    components: {
        sideBar,
        headBox,
        tagsBar
    },
    setup(){
        
    },
    methods: {
    }
})
</script>
<style lang="scss" scoped>
.main-box {
    display: flex;
    width: 100%;
    height: 100%;
    .side-bar {
        width: 200px;
        height: 100%;
        background: #ccc;
        overflow-y: auto;
    }
    .right-box {
        flex: 1;
        display: flex;
        flex-direction: column;
        .head-box {
            height: 60px;
            background: #ddd;
        }
        .tags-bar {
            height: 40px;
            background: #eee;
        }
        .content-box {
            flex: 1;
            padding: 14px;
            box-sizing: border-box;
        }
    }
}
</style>