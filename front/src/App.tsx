import React from "react"
import "./App.scss"
import { Route, Routes } from "react-router-dom"
import Rentings from "./components/pages/rentings/Rentings"
import Vehicles from "./components/pages/vehicles/Vehicles"
import Clients from "./components/pages/clients/Clients"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Rentings />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/clients" element={<Clients />} />
    </Routes>
  )
}

export default App
