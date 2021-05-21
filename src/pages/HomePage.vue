<template>
  <div class="homePage">
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { sportsService } from '../services/SportsService'

export default {
  name: 'HomePage',

  setup() {
    onMounted(() => {
      sportsService.getNews()
    })
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
