import {
    BrowserRouter as Router,
    Routes, 
    Route} from 'react-router-dom';
import './App.css'
import Search from './pages/search.jsx';
import Navbar from './components/Navbar.jsx';
function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/> 
                <Routes>
                    <Route path='/' element={<h1>API RICK & MORTY </h1>} />
                    <Route path='/search' element={<Search/>} />
                </Routes>
            </Router>
        </div>
    )
}
export default App;
