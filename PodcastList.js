import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      const response = await axios.get('https://example.com/api/podcasts');
      setPodcasts(response.data);
    };

    fetchPodcasts();
  }, []);

  return (
    <div className="podcast-list">
      <h2>Podcasts</h2>
      <ul>
        {podcasts.map((podcast) => (
          <li key={podcast.id}>
            <Link to={`/podcasts/${podcast.id}`}>
              <h3>{podcast.title}</h3>
              <p>{podcast.description}</p>
              <p>{podcast.episodes.length} episodes</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastList;
