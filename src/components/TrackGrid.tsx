import React from "react";
import styled from "styled-components";
import { Track } from "../types";
import TrackItem from "./TrackItem";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 300px 300px 300px;
  gap: 16px;
`;

interface TrackGridProps {
  tracks: Track[];
}

const TrackGrid: React.FC<TrackGridProps> = ({ tracks }) => {
  return (
    <Grid>
      {tracks.map((track) => (
        <TrackItem key={track.id} track={track} />
      ))}
    </Grid>
  );
};

export default TrackGrid;
