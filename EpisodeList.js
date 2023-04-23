import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EpisodeList = ({ podcastId }) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await axios.get(`https://example.com/api/podcasts/${podcastId}/episodes`);
      setEpisodes(response.data);
    };

    fetchEpisodes();
  }, [podcastId]);

  return (
    <div className="episode-list">
      <h2>Episodes</h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <h3>{episode.title}</h3>
            <p>{episode.description}</p>
            <audio src={episode.audioUrl} controls />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
