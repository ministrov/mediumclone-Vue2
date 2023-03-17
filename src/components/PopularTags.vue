<template>
  <div>
    <McvLoading v-if="isLoading"/>
    <McvErrorMessage v-if="error"/>

    <div class="sidebar" v-if="popularTags">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link
          v-for="popularTag in popularTags"
          :key="popularTag"
          :to="{name: 'tag', params: {slug: popularTag}}"
          class="tag-default tag-pill"
        >
          {{ popularTag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';// Самый простой способ получить данные из Vuex(store)
import { actionTypes } from '@/store/modules/popularTags';
import McvLoading from '@/components/Loading'
import McvErrorMessage from '@/components/ErrorMessage'

export default {
  name: 'McvPopularTags',
  components: {
    McvLoading,
    McvErrorMessage
  },
  computed: {
    ...mapState({
      isLoading: state => state.popularTags.isLoading,
      error: state => state.popularTags.error,
      popularTags: state => state.popularTags.data,

    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags);
  }
}
</script>

<style lang="scss" scoped>

</style>