import React, { useRef } from "react";
import LibrarySong from "./LibrarySong";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Library = ({ songs, setCurrentSong, currentSong, isOpen, setTogglePanel }) => {
  const libraryRef = useRef();

  return (
    <div className={`library ${isOpen ? 'library-is-open' : ''}`}>
      <h2>Library</h2>
      <FontAwesomeIcon
        className="library-close-panel"
        size="2x"
        icon={faTimes}
        onClick={() => setTogglePanel(!isOpen)}
      />
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            currentSong={currentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
