<!-- eslint-disable vue/valid-template-root -->
<template>
  <div>
    <McvTopbar/>

    <router-view/>
  </div>
</template>

<script>
import McvTopbar from '@/components/Topbar.vue'

export default {
  name: 'McvApp',
  components: {
    McvTopbar
  }
}
</script>

<style></style>
