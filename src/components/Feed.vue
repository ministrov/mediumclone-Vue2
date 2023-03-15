<template>
  <div>
    <h2>Feed {{ apiUrl }}</h2>
  </div>
</template>

<script>
  import { actionTypes } from '@/store/modules/feed';

  export default {
    name: 'McvFeed',
    props: {
      apiUrl: {
        type: String,
        required: true
      }
    },
    mounted() {
      this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl});
    },
  }
</script>

<style lang="scss" scoped>

</style>