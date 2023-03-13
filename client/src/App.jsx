import UserHome from './pages/UserHome'
import DriverHome from './pages/DriverHome/index.jsx'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/user' element={<UserHome />} />
        <Route path='/driver' element={<DriverHome />} />

      </Routes>
    </Router>
  )
}

export default App
