import Home from './pages/Home'
import { io } from 'socket.io-client'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
