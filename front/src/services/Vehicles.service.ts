import axios from "axios"
import { Vehicle } from "../models/Vehicle"
import { API_URL } from "../_config/api.config"

class VehicleService {
  vehiclesUrl = `${API_URL}/vehicles`

  getAll() {
    return axios.get<Vehicle[]>(this.vehiclesUrl)
  }

  getOne(id: string) {
    return axios.get<Vehicle>(`${this.vehiclesUrl}/${id}`)
  }

  create(dataObject: Vehicle) {
    return axios.post<Vehicle>(this.vehiclesUrl, dataObject)
  }

  update(id: string, dataObject: Vehicle) {
    return axios.put<Vehicle>(`${this.vehiclesUrl}/${id}`, dataObject)
  }

  remove(id: string) {
    return axios.delete<Vehicle>(`${this.vehiclesUrl}/${id}`)
  }
}

export default Object.freeze(new VehicleService())
