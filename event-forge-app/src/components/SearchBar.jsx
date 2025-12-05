import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styling/SearchBar.css';

export default function SearchBar () {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/search?q=${value}`
        );

        setSuggestions(data.events);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [value]);

  return (
    <div className="search-container" >
      <label className="search-label">Search Events Near You:   </label>
      <input
        type="text"
        className="input"
        placeholder="Search Events..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit" className="search-button">Search</button>
    </div>
  );
};

