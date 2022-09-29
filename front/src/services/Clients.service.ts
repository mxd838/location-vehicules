import axios from "axios"
import { Client } from "../models/Client"
import { API_URL } from "../_config/api.config"

class ClientService {
  clientsUrl = `${API_URL}/clients`

  getAll() {
    return axios.get<Client[]>(this.clientsUrl)
  }

  getOne(id: string) {
    return axios.get<Client>(`${this.clientsUrl}/${id}`)
  }

  create(dataObject: Client) {
    return axios.post<Client>(this.clientsUrl, dataObject)
  }

  update(id: string, dataObject: Client) {
    return axios.put<Client>(`${this.clientsUrl}/${id}`, dataObject)
  }

  remove(id: string) {
    return axios.delete<Client>(`${this.clientsUrl}/${id}`)
  }
}

export default Object.freeze(new ClientService())
