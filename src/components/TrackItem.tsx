import React, { MutableRefObject, useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Track } from "../types";
import { ImageServer } from "../api";

const Container = styled.div<{ $background: string }>`
  height: 100%;
  width: 100%;
  border-radius: 16px;
  color: white;
  background: ${({ $background }) =>
    $background ? `url(${$background})` : "#2f2f2f"};
  padding: 16px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background 200ms ease;

  &:hover {
    background: #E4572E;
  }
`;

const TrackItem: React.FC<{ track: Track }> = ({ track }) => {
  const audioRef = useRef<HTMLAudioElement>() as MutableRefObject<HTMLAudioElement>;
  const [albumImage, setAlbumImage] = useState<string>("");

  useEffect(() => {
    const fetchImage = async () => {
      const {
        data: { image },
      } = await ImageServer.get<{ image: string }>(
        `${track.albumId}/images/300x300.jpg`
      );
      console.log(image);
      setAlbumImage(image);
    };

    fetchImage();
  }, [track]);

  return (
    <Container
      $background={albumImage}
      onClick={() =>
        audioRef.current?.paused
          ? audioRef.current.play()
          : audioRef.current.pause()
      }
    >
      <h1>{track.name}</h1>
      <h2>{track.artistName}</h2>
      {track.isStreamable && (
        <audio ref={audioRef}>
          <source src={track.previewURL} type="audio/mpeg" />
        </audio>
      )}
    </Container>
  );
};

export default TrackItem;
