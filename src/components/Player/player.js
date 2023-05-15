import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({ token, trackUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, [trackUri]);

  if (!token) return null;
  return (
    <>
      <p>
        Unfortunately, if you don't have Spotify premium account the player
        won't work ;(
      </p>
      <SpotifyPlayer
        token={token}
        callback={(state) => {
          if (state.isPlaying) {
            setPlay(false);
          }
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
      />
    </>
  );
}
