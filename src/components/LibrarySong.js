import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong }) => {

  const onClickHandler = () => {
    setCurrentSong(song)
  }

  return (
    <div onClick={() => onClickHandler()} className="library-song">
      <img src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h5>{song.artist}</h5>
      </div>
    </div>
  );
};

export default LibrarySong;
