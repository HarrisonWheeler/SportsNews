<template>
  <div class="homePage background-color container-fluid">
    <div class="row" v-if="state.loading">
      <h2>...Loading</h2>
    </div>
    <div class="row p-2" v-else>
      <div class="card-columns">
        <sports-component v-for="n in state.news" :key="n" :news-prop="n" />
      </div>
    </div>
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
.background-color{
  background-color: #708090;
}
</style>
