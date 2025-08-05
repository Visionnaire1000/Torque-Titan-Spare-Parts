import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import config from '../config';
import './SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = new URLSearchParams(location.search);
  const type = query.get('type');
  const breed = query.get('breed');
  const age = query.get('age');

  useEffect(() => {
    const stored = localStorage.getItem('farmartUser');
    if (!stored) {
      alert('Login required');
      return;
    }

    const { token } = JSON.parse(stored);
    const params = new URLSearchParams();
    if (type) params.append('type', type);
    if (breed) params.append('breed', breed);
    if (age) params.append('age', age);

    fetch(`${config.API_BASE_URL}/animals?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setResults(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching search results:', err);
        setLoading(false);
      });
  }, [type, breed, age]);

  if (loading) return <p className="search-status">Loading...</p>;
  if (results.length === 0) return <p className="search-status">No animals found.</p>;

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="animal-grid">
        {results.map((animal) => (
          <div key={animal.id} className="animal-card">
            <img src={animal.image || 'https://via.placeholder.com/80'} alt={animal.type} />
            <div className="animal-info">
              <p><strong>Type:</strong> {animal.type}</p>
              <p><strong>Breed:</strong> {animal.breed}</p>
              <p><strong>Age:</strong> {animal.age}</p>
              <p><strong>Price:</strong> ${animal.price.toLocaleString()}</p>
              <p><strong>Farmer:</strong> {animal.farmer_name}</p>
              <Link to={`/animals/${animal.id}`} className="details-link">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
