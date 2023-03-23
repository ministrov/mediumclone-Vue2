<template>
  <div>
    <McvLoading v-if="isLoading" />
    <McvArticleForm
      v-if="initialValues"
      :initialValues="initialValues"
      :errors="validationErrors"
      :isSubmitting="isSubmitting"
      @articleSubmit="onSubmit"
    />
  </div>
</template>

<script>
import { actionTypes } from "@/store/modules/editArticle";
import { mapState } from "vuex";
import McvArticleForm from "@/components/ArticleForm";
import McvLoading from "@/components/Loading";

export default {
  name: "McvEditArticle",
  components: {
    McvArticleForm,
    McvLoading,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.editArticle.isLoading,
      isSubmitting: (state) => state.editArticle.isSubmitting,
      article: (state) => state.editArticle.article,
      validationErrors: (state) => state.editArticle.validationErrors,
    }),
    initialValues() {
      if (!this.article) {
        return null;
      }
      return {
        title: this.article.title,
        description: this.article.description,
        body: this.article.body,
        tagList: this.article.tagList,
      };
    },
  },
  mounted() {
    this.$store.dispatch(actionTypes.getArticle, {
      slug: this.$route.params.slug,
    });
  },
  methods: {
    onSubmit(articleInput) {
      const slug = this.$route.params.slug;
      this.$store
        .dispatch(actionTypes.updateArticle, { articleInput, slug })
        .then((article) => {
          this.$router.push({ name: "article", params: { slug: article.slug } });
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
