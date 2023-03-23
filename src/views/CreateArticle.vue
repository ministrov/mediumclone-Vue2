<template>
  <McvArticleForm
    :initialValues="initialValues"
    :errors="validationErrors"
    :isSubmitting="isSubmitting"
    @articleSubmit="onSubmit"
  />
</template>

<script>
import { actionTypes } from "@/store/modules/createArticle";
import { mapState } from "vuex";
import McvArticleForm from "@/components/ArticleForm";

export default {
  name: "McvCreateArticle",
  components: {
    McvArticleForm,
  },
  data() {
    return {
      initialValues: {
        title: "",
        description: "",
        body: "",
        tagList: [],
      },
    };
  },
  computed: {
    ...mapState({
      isSubmitting: (state) => state.createArticle.isSubmitting,
      validationErrors: (state) => state.createArticle.validationErrors,
    }),
  },
  methods: {
    onSubmit(articleInput) {
      this.$store
        .dispatch(actionTypes.createArticle, { articleInput })
        .then((article) => {
          this.$router.push({ name: "article", params: { slug: article.slug } });
        });
      console.log("onsubmit in createArticle");
    },
  },
};
</script>

<style lang="scss" scoped></style>
