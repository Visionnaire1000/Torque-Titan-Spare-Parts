import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AdminHomepage from './AdminHomepage';
import AddItem from './AddItem';
import OrderManagement from './OrderManagement';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { user, isFarmer } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('animals');

  useEffect(() => {
    if (!user || !isFarmer) {
      navigate('/login');
    }
  }, [user, isFarmer, navigate]);

  if (!user || !isFarmer) return null;

  const handleAddItem = (item) => {
    console.log('Add item:', item);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div className="tab-buttons">
        <button
          onClick={() => setActiveTab('animals')}
          className={`tab-button ${activeTab === 'animals' ? 'active' : ''}`}
        >
          My Items
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`tab-button ${activeTab === 'orders' ? 'active' : ''}`}
        >
          Orders
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'animals' && <AdminHomepage />}
        {activeTab === 'add' && <AddItem onAddAnimal={handleAddItem} />}
        {activeTab === 'orders' && <OrderManagement />}
      </div>
    </div>
  );
};

export default AdminDashboard;

