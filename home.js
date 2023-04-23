import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      const response = await axios.get('https://example.com/api/podcasts');
      setPodcasts(response.data);
    };

    fetchPodcasts();
  }, []);

  return (
    <div className="home">
      <h1>Podcasts</h1>
      <ul className="podcasts-list">
        {podcasts.map((podcast) => (
          <li key={podcast.id}>
            <Link to={`/podcasts/${podcast.id}`}>
              <img src={podcast.image} alt={podcast.title} />
              <h2>{podcast.title}</h2>
              <p>{podcast.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
