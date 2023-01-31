<!-- eslint-disable vue/valid-template-root -->
<template>
  <div>
    <McvTopbar/>

    <router-view/>
  </div>
</template>

<script>
import McvTopbar from '@/components/Topbar.vue'
import { actionTypes } from './store/modules/auth';

export default {
  name: 'McvApp',
  components: {
    McvTopbar
  },
  mounted() {
    console.log('Helllo app');
    this.$store.dispatch(actionTypes.getCurrentUser);
  }
}
</script>

<style></style>
