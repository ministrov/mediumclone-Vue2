<template>
  <div>
    <McvArticleForm
      :initialValues="initialValues"
      :errors="validationErrors"
      :isSubmitting="isSubmitting"
      @articleSubmit="onSubmit"
    />
  </div>
</template>

<script>
import McvArticleForm from '@/components/ArticleForm';

  export default {
    name: 'McvCreateArticle',
    components: {
      McvArticleForm
    },
    data() {
      return {
        initialValues: {
          title: '',
          description: '',
          body: '',
          tagList: []
        },
        validationErrors: null,
        isSubmitting: false
      }
    },
    methods: {
      onSubmit(data) {
        console.log('onsubmit in createArticle', data);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>