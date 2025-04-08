import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import AppRoutes from './Routes/routes'

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
