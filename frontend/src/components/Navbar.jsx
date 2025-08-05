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
        <select><option disabled selected>TYRES</option><option>SEDAN TYRES</option><option>SUV TYRES</option><option>TRUCK TYRES</option><option>BUS TYRES</option></select>
        <select><option disabled selected>RIMS</option><option>SEDAN RIMS</option><option>SUV RIMS</option><option>TRUCK RIMS</option><option>BUS RIMS</option></select>
        <select><option disabled selected>BATTERIES</option><option>SEDAN BATTERIES</option><option>SUV BATTERIES</option><option>TRUCK BATTERIES</option><option>BUS BATTERIES</option></select>
        <select><option disabled selected>OIL FILTERS</option><option>SEDAN OIL FILTERS</option><option>SUV OIL FILTERS</option><option>TRUCK OIL FILTERS</option><option>BUS OIL FILTERS</option></select>
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

