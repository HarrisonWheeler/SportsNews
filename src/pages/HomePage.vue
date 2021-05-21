<template>
  <div class="homePage container-fluid" v-if="state.loading">
    <div class="row">
      <h2>...Loading</h2>
    </div>
  </div>
  <div class="row" v-else>
    <sports-component v-for="n in state.news" :key="n" :news-prop="n" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { sportsService } from '../services/SportsService'
import { AppState } from '../AppState'

export default {
  name: 'HomePage',

  setup() {
    onMounted(() => {
      sportsService.getNews()
      AppState.loading = true
    })

    const state = reactive({
      news: computed(() => AppState.news),
      loading: computed(() => AppState.loading)
    })

    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
