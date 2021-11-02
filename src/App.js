import React, { useState, useEffect } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Data from "./data/data.js";
import Library from "./components/Library";
import OpenButton from "./components/OpenButton";
import "./styles/index.css";

function App() {
  const [songs, setSongs] = useState(Data);
  const [songIndex, setSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[songIndex]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [togglePanel, setTogglePanel] = useState(false);

  useEffect(() => {
    // TODO set is active to true to the current song
    setCurrentSong(songs[songIndex]);
  }, [songIndex]);

  return (
    <div className="App">
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        songIndex={songIndex}
        setSongIndex={setSongIndex}
        songs={songs}
      />
      <OpenButton
        toggleLibrary={setTogglePanel}
        isLibraryOpen={togglePanel}
      ></OpenButton>
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        isOpen={togglePanel}
        setTogglePanel={setTogglePanel}
      />
    </div>
  );
}

export default App;
