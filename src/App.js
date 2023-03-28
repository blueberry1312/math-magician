import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/quote';
import Home from './components/Home';
import './App.css';

function Header() {
  return (
    <header>
      <h1>Math Magicians</h1>
      <h2>Welcome to our page!</h2>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="firstcontainer">
        <div className="navbar">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/calculator">Calculator</Link>
              </li>
              <li>
                <Link to="/quote">Quote</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>Copyright © 2023 Made by Nestor, logic by microverse.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
