<template>
  <div>
    ADD TO FAVORITES
  </div>
</template>

<script>
  export default {
    name: 'McvAddToFavorites',
    props: {
      isFavorited: {
        type: Boolean,
        required: true
      },
      articleSlug: {
        type: String,
        required: true
      },
      favoritesCount: {
        type: Number,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>