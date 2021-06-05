<template>
  <div class="sportsComponent card">
    <div v-if="!newsProp.urlToImage">
      <h6>No Image</h6>
    </div>
    <div v-else>
      <img class="card-img" :src="newsProp.urlToImage" alt="">
      <div class="card-img-overlay img-overlay-hover">
        <h6 class="text-light display-none">
          {{ newsProp.title }}
        </h6>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SportsComponent',
  props: {
    newsProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.img-overlay-hover:hover > .display-none{
  display: block;
  background-color: rgba(#000, 0.4);
}

.display-none{
  display: none;
}
</style>
