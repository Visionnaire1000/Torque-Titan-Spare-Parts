import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//pages
import Marketplace from "./components/Marketplace";
import Login from "./components/Login";
import Register from "./components/Register";
import ItemDetail from "./components/ItemDetail";
import FarmerDashboard from "./components/AdminDashboard";
import Homepage from "./components/Homepage";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import Stripe from "./components/Stripe";
import RoleProtectedRoute from "./components/RoleProtectedRoute"; 
import SearchResults from "./components/SearchResults";
import SedanTyres from "./components/categories/SedanTyres";
import SuvTyres from "./components/categories/SuvTyres";
import TruckTyres from "./components/categories/TruckTyres";
import BusTyres from "./components/categories/BusTyres";
import SedanRims from "./components/categories/SedanRims";
import SuvRims from "./components/categories/SuvRims";
import TruckRims from "./components/categories/TruckRims";
import BusRims from "./components/categories/BusRims";
import SedanBatteries from "./components/categories/SedanBatteries";
import SuvBatteries from "./components/categories/SuvBatteries";
import TruckBatteries from "./components/categories/TruckBatteries";
import BusBatteries from "./components/categories/BusBatteries";
import SedanOilFilters from "./components/categories/SedanOilFilters";
import SuvOilFilters from "./components/categories/SuvOilFilters";
import TruckOilFilters from "./components/categories/TruckOilFilters";
import BusOilFilters from "./components/categories/BusOilFilters";

//redux
import { CartProvider } from "./contexts/CartContext";

//style
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} /> 
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment" element={<Stripe />} />

              <Route path="/animals/:id" element={<ItemDetail />} /> 

              <Route
                path="/marketplace"
                element={<Marketplace />} />
                 {/* <RoleProtectedRoute role="buyer"> 
                    <Marketplace />
                </RoleProtectedRoute> */}
              <Route 
               path="/cart" 
               element={<Cart />} />
                {/*
                <RoleProtectedRoute role="buyer">
                   <Cart />
                </RoleProtectedRoute> */}    
              <Route 
               path="/farmer" 
               element={<FarmerDashboard />} />
                {/*<RoleProtectedRoute role="farmer">
                   <FarmerDashboard />
                </RoleProtectedRoute>  */}  
              <Route path="/search-results" element={<SearchResults />} />
              <Route path="/sedan-tyres" element={<SedanTyres />} />
              <Route path="/suv-tyres" element={<SuvTyres />} />
              <Route path="/truck-tyres" element={<TruckTyres />} />
              <Route path="/bus-tyres" element={<BusTyres />} />
              <Route path="/sedan-rims" element={<SedanRims />} />
              <Route path="/suv-rims" element={<SuvRims />} />
              <Route path="/truck-rims" element={<TruckRims />} />
              <Route path="/bus-rims" element={<BusRims />} />
              <Route path="/sedan-batteries" element={<SedanBatteries />} />
              <Route path="/suv-batteries" element={<SuvBatteries />} />
              <Route path="/truck-batteries" element={<TruckBatteries />} />
              <Route path="/bus-batteries" element={<BusBatteries />} />
              <Route path="/sedan-oil-filters" element={<SedanOilFilters />} />
              <Route path="/suv-oil-filters" element={<SuvOilFilters />} />
              <Route path="/truck-oil-filters" element={<TruckOilFilters />} />
              <Route path="/bus-oil-filters" element={<BusOilFilters />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </CartProvider>
  );
}

export default App;