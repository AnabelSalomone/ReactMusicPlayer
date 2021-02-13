import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Data from "./data/data.js";
import Library from "./components/Library";
import "./styles/index.css";

function App() {
  const [songs, setSongs] = useState(Data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />{" "}
    </div>
  );
}

export default App;
