<template>
  <div class="home-page">
    <McvBanner />
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <McvFeedToggler :tagName="tagName" />
          <McvFeed :apiUrl="apiUrl" />
        </div>
        <div class="col-md-3">
          <McvPopularTags />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvFeed from "@/components/Feed.vue";
import McvPopularTags from "@/components/PopularTags";
import McvBanner from "@/components/Banner";
import McvFeedToggler from "@/components/FeedToggler";
export default {
  name: "McvYourFeed",
  components: {
    McvFeed,
    McvPopularTags,
    McvBanner,
    McvFeedToggler,
  },
  computed: {
    tagName() {
      return this.$route.params.slug;
    },
    apiUrl() {
      return `/articles?tag=${this.tagName}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
