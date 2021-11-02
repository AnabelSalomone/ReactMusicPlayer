import React from "react";
import "../styles/index.css";

const Song = (props) => {
  const { currentSong, isPlaying } = props;

  return (
    <div className="song-container">
      <img data-testid="song-cover" src={currentSong.cover} className={isPlaying ? `song-cover` : null} />
      <h2 data-testid="song-name">{currentSong.name}</h2>
      <h3 data-testid="song-artist">{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
