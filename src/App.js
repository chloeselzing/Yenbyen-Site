import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Routes, Route, 
//Navigate
} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Join from './Components/Join';
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/join' element={<Join/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
