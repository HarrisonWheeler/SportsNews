import { AppState } from '../AppState'
import { api } from './AxiosService'

class SportsService {
  async getNews() {
    const res = await api.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=c81be01485874f8c81e02f457799b44f')
    AppState.news = res.data.articles
    AppState.loading = false
  }
}

export const sportsService = new SportsService()
