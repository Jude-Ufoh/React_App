import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Create from './components/Create';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Root Route (Home) */}
          <Route path="/" element={<Home />} />

          {/* About Page Route */}
          <Route path="/aboutpage" element={<About />} />

          {/* Create Record Route */}
          <Route path="/createrecord" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

