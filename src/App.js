
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Captain from './Components/Captain';
import LoginForm from './Components/LoginForm';
// import Team from './Components/Team';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Captain />} />
          <Route path="/loginform" element={<LoginForm />} />
          {/* <Route path="/" element={<Team />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;





