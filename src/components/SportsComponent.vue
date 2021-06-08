<template>
  <div class="sportsComponent card border border-white">
    <div v-if="!newsProp.urlToImage">
      <!-- TODO need to find a better solution to this -->
      <h6>No Image</h6>
    </div>
    <div v-else>
      <img class="card-img box-shadow" :src="newsProp.urlToImage" alt="">
      <div class="card-img-overlay img-overlay-hover d-flex align-items-end text-left text-light pb-1">
        <div class="row">
          <div class="cursor opacity border rounded height p-1">
            {{ newsProp.title }}
          </div>
        </div>
        <!-- TODO lets add the title at the bottom of the card, and have it transition up to reveal the test of the info -->
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
}

.box-shadow{
  box-shadow: 10px 10px 8px 10px #000000;
}

.opacity{
  background-color: rgba(#000, 0.4);
}

.height{
  height: 100%;
}

.display-none{
  display: none;
}

.cursor{
  cursor: pointer
  }
</style>
