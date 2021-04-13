<template>
  <div class="wscn-http404-container">
    404 notFound
    {{ message }}
  </div>
</template>

<script>

export default {
  name: 'NotFound',
  computed: {
    message() {
      return '页面不存在或者没权限访问，请联系管理员...'
    }
  }
}
</script>
