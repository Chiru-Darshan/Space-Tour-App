import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import Destinations from './components/Destinations.js'
import Crew from './components/Crew.js'
import SlideTester from './components/SlideTester.js'
import Technology from './components/Technology.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <div className="nav">
            <Nav></Nav>
          </div>
          <div className="main-content">
            <Routes>
              <Route path="/Space-Tour-App" element={<Home />} exact />
              <Route path="destinations" element={< Destinations />} />
              <Route path="crew" element={< Crew />} />
              <Route path="technology" element={< Technology />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
