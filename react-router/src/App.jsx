import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';

function App() {
  return (
    
<div id="container">
<h1>Hello React Router!</h1>
<nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <br />
          <li>
            <Link to="/blue">Blue</Link>
          </li>
          <br />
          <li>
            <Link to="/red">Red</Link>
          </li>
        </ul>
      </nav>
<div id="navbar">
  <Link>
    <Link path="/blue" blue={<h1>Blue</h1>} />
    <Link path="/red" red={<h1>Red</h1>} />
    <Link path="/home" home={<h1>Home</h1>} />
  </Link>
  </div>

<div id="main-section">
  <Routes>
    <Route path="/blue" blue={<h1>Blue</h1>} />
     <Route path="/red" red={<h1>Red</h1>} />
     <Route path="/home" home={<h1>Home</h1>} />
  </Routes>
  </div>
</div>

  )
}
export default App;