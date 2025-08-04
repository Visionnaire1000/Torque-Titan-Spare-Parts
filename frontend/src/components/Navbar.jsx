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
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://i.imgur.com/wVCDyd7.png" alt="Torque Titan logo"/>
      </div>
       <div className='categories'>
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
            <option>BUS RIMS</option>
          </select>
          <select>
            <option disabled selected>BATTERIES</option>
            <option>SEDAN BATTERIES</option>
            <option>SUV BATTERIES</option>
            <option>TRUCK BATTERIES</option>
            <option>BUS BATTERIES</option>
          </select>
          <select>
            <option disabled selected>OIL FILTERS</option>
            <option>SEDAN OIL FILTERS</option>
            <option>SUV OIL FILTERS</option>
            <option>TRUCK OIL FILTERS</option>
            <option>BUS OIL FILTERS</option>
          </select>
        <div class="search-container">
        <input type="text" placeholder="Search Item" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
        <div className="right-section">
        <div className="dashboard-dropdown">
          <button className="dashboard-button" onClick={() => setShowDropdown(!showDropdown)}  title="dashboard">
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

        <nav>
        {/* ... */}
        <Link to="/cart" className="cart">
          <ShoppingCart />
          <span className="cart-count">{items.length}</span> 
      </Link>
        {/* ... */}
         </nav>

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