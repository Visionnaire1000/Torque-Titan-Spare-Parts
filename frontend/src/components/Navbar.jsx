/*import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { logout, isAuthenticated } = useAuth();
  const { items } = useCart();
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const parseSearchTerm = (term) => {
    const parsed = { type: '', breed: '', age: '' };
    const tokens = term.toLowerCase().split(',').map(t => t.trim());

    tokens.forEach(token => {
      if (!isNaN(Number(token))) {
        parsed.age = token;
      } else if (['heifer', 'bullock', 'ram', 'buck'].includes(token)) {
        parsed.type = token;
      } else {
        parsed.breed = token;
      }
    });

    return parsed;
  };

  const handleSearch = () => {
    const stored = localStorage.getItem('farmartUser');
    if (!stored) {
      alert('You must be logged in to search');
      return;
    }

    const filters = parseSearchTerm(searchTerm);

    // Navigate with filters as query parameters
    navigate(`/search-results?type=${filters.type}&breed=${filters.breed}&age=${filters.age}`);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://i.imgur.com/wVCDyd7.png" alt="Torque Titan logo" />
      </div>

      <div className="dashboard-dropdown">
        <button className="dashboard-button" onClick={() => setShowDropdown(!showDropdown)} title="Dashboard">
          <Menu />
        </button>
        {showDropdown && (
          <div className="dropdown-menu">
            <Link to="/">Home</Link>
            <Link to="/">My Account</Link>
            <Link to="/marketplace">Marketplace</Link>
            <Link to="/farmer">Farmer Dashboard</Link>
            <Link to="/">Theme</Link>
            {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
          </div>
        )}
      </div>

      <div className="categories">
        <select>
          <option disabled selected>TYRES</option>
          <option>SEDAN TYRES</option>
          <option>SUV TYRES</option>
          <option>TRUCK TYRES</option>
          <option>BUS TYRES</option>
        </select>
        <select>
          <option disabled selected>RIMS</option>
          <option>SEDAN RIMS</option>
          <option>SUV RIMS</option>
          <option>TRUCK RIMS</option>
          <option>BUS RIMS</option></select>
        <select>
          <option disabled selected>BATTERIES</option>
          <option>SEDAN BATTERIES</option>
          <option>SUV BATTERIES</option>
          <option>TRUCK BATTERIES</option>
          <option>BUS BATTERIES</option></select>
        <select>
          <option disabled selected>OIL FILTERS</option>
          <option>SEDAN OIL FILTERS</option>
          <option>SUV OIL FILTERS</option>
          <option>TRUCK OIL FILTERS</option>
          <option>BUS OIL FILTERS</option></select>
      </div>

      <div className="navbar-smart-search">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search item..."
          className="navbar-search-input"
        />
        <button onClick={handleSearch} className="navbar-search-button" title="Search">
          <i className="fa fa-search" />
        </button>
      </div>

      <div className="right-section">
        <Link to="/cart" className="cart">
          <ShoppingCart />
          <span className="cart-count">{items.length}</span>
        </Link>

        {!isAuthenticated && (
          <>
            <Link to="/login" className="login">Login</Link>
            <Link to="/register" className="register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar; */


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { logout, isAuthenticated } = useAuth();
  const { items } = useCart();
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const parseSearchTerm = (term) => {
    const parsed = { type: '', breed: '', age: '' };
    const tokens = term.toLowerCase().split(',').map(t => t.trim());

    tokens.forEach(token => {
      if (!isNaN(Number(token))) {
        parsed.age = token;
      } else if (['heifer', 'bullock', 'ram', 'buck'].includes(token)) {
        parsed.type = token;
      } else {
        parsed.breed = token;
      }
    });

    return parsed;
  };

  const handleSearch = () => {
    const stored = localStorage.getItem('farmartUser');
    if (!stored) {
      alert('You must be logged in to search');
      return;
    }

    const filters = parseSearchTerm(searchTerm);
    navigate(`/search-results?type=${filters.type}&breed=${filters.breed}&age=${filters.age}`);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSelectNavigate = (e) => {
    const value = e.target.value;
    if (value) navigate(`/${value}`);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://i.imgur.com/wVCDyd7.png" alt="Torque Titan logo" />
      </div>

      <div className="dashboard-dropdown">
        <button className="dashboard-button" onClick={() => setShowDropdown(!showDropdown)} title="Dashboard">
          <Menu />
        </button>
        {showDropdown && (
          <div className="dropdown-menu">
            <Link to="/">Home</Link>
            <Link to="/">My Account</Link>
            <Link to="/marketplace">Marketplace</Link>
            <Link to="/farmer">Farmer Dashboard</Link>
            <Link to="/">Theme</Link>
            {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
          </div>
        )}
      </div>

      <div className="categories">
        <select defaultValue="" onChange={handleSelectNavigate}>
          <option disabled value="">TYRES</option>
          <option value="sedan-tyres">SEDAN TYRES</option>
          <option value="suv-tyres">SUV TYRES</option>
          <option value="truck-tyres">TRUCK TYRES</option>
          <option value="bus-tyres">BUS TYRES</option>
        </select>

        <select defaultValue="" onChange={handleSelectNavigate}>
          <option disabled value="">RIMS</option>
          <option value="sedan-rims">SEDAN RIMS</option>
          <option value="suv-rims">SUV RIMS</option>
          <option value="truck-rims">TRUCK RIMS</option>
          <option value="bus-rims">BUS RIMS</option>
        </select>

        <select defaultValue="" onChange={handleSelectNavigate}>
          <option disabled value="">BATTERIES</option>
          <option value="sedan-batteries">SEDAN BATTERIES</option>
          <option value="suv-batteries">SUV BATTERIES</option>
          <option value="truck-batteries">TRUCK BATTERIES</option>
          <option value="bus-batteries">BUS BATTERIES</option>
        </select>

        <select defaultValue="" onChange={handleSelectNavigate}>
          <option disabled value="">OIL FILTERS</option>
          <option value="sedan-oil-filters">SEDAN OIL FILTERS</option>
          <option value="suv-oil-filters">SUV OIL FILTERS</option>
          <option value="truck-oil-filters">TRUCK OIL FILTERS</option>
          <option value="bus-oil-filters">BUS OIL FILTERS</option>
        </select>
      </div>

      <div className="navbar-smart-search">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search item..."
          className="navbar-search-input"
        />
        <button onClick={handleSearch} className="navbar-search-button" title="Search">
          <i className="fa fa-search" />
        </button>
      </div>

      <div className="right-section">
        <Link to="/cart" className="cart">
          <ShoppingCart />
          <span className="cart-count">{items.length}</span>
        </Link>

        {!isAuthenticated && (
          <>
            <Link to="/login" className="login">Login</Link>
            <Link to="/register" className="register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


