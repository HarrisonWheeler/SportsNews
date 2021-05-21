<template>
  <div class="sportsComponent col-3">
    <h1>helloooo</h1>
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

</style>
