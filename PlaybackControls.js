import React, { useState, useEffect, useRef } from 'react';

const PlaybackControls = ({ audioUrl, onEnd }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  const handleSkipForward = () => {
    audioRef.current.currentTime += 30;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    onEnd();
  };

  return (
    <div className="playback-controls">
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
      <button onClick={handleSkipBackward}>-10s</button>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={handleSkipForward}>+30s</button>
      <div>{currentTime.toFixed(0)}s</div>
    </div>
  );
};

export default PlaybackControls;
