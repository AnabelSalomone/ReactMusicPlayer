import React from "react";

const OpenButton = ({ toggleLibrary, isLibraryOpen }) => {
  return (
    <div class="open-button-container">
      <button
        className="open-button"
        onClick={() => toggleLibrary(!isLibraryOpen)}
      >
        {!isLibraryOpen ? "Open Library" : "Close Library"}
      </button>
    </div>
  );
};

export default OpenButton;
