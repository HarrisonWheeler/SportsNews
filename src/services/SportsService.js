import { api } from './AxiosService'

class SportsService {
  async getNews() {
    const res = await api.get('')
    console.log(res)
  }
}

export const sportsService = new SportsService()
