import Looking from './components/Looking'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Looking />} />
            </Routes>
        </Router>
    )
}

export default App