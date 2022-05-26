import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Routes, Route, 
//Navigate
} from 'react-router-dom'
import Home from './Components/Home';
import Program from './Components/Program';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/program' element={<Program/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/program' element={<Program/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
