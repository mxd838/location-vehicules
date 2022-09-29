import axios from "axios"
import { Renting } from "../models/Renting"
import { API_URL } from "../_config/api.config"

class RentingService {
  rentingsUrl = `${API_URL}/rentings`

  getAll() {
    return axios.get<Renting[]>(this.rentingsUrl)
  }

  getOne(id: string) {
    return axios.get<Renting>(`${this.rentingsUrl}/${id}`)
  }

  create(dataObject: Renting) {
    return axios.post<Renting>(this.rentingsUrl, dataObject)
  }

  update(id: string, dataObject: Renting) {
    return axios.put<Renting>(`${this.rentingsUrl}/${id}`, dataObject)
  }

  remove(id: string) {
    return axios.delete<Renting>(`${this.rentingsUrl}/${id}`)
  }
}

export default Object.freeze(new RentingService())
