import React from "react";
import { render } from "@testing-library/react";
import Song from "../Song";

describe("<Song/>", () => {
  it("should show the song name", () => {
    const { queryByTestId } = render(
      <Song currentSong={{name: 'Song name'}} isPlaying={false} />
    );
    const title = queryByTestId("song-name");
    expect(title.innerHTML).toBe("Song name");
  });

    it("should show if it is playing", () => {
      const { queryByTestId } = render(
        <Song currentSong={{ isPlaying: "Song name" }} isPlaying={true} />
      );
      const cover = queryByTestId("song-cover");
      expect(cover.classList.contains("song-cover")).toBe(true)

    });

});
