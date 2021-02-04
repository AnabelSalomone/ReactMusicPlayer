import React from "react";
import "../styles/index.css";

const Song = (props) => {
  const { currentSong, isPlaying } = props;

  return (
    <div className="song-container">
      <img src={currentSong.cover} className={isPlaying ? `song-cover` : null} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
