// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Museum Logo" />
        </Link>
      </div>

      <button
        className={`burger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">Visit</Link></li>
        <li><Link to="/">Exhibitions</Link></li>
        <li><Link to="/">Molslaboratory</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/my-kraeg">My Kræg</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>
    </nav>
  );
}
