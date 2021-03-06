import React, { useState, useEffect } from "react";
import API from "../api";
import { Track, TrackResponse } from "../types";
import TrackGrid from "./TrackGrid";

const TrackDoodad: React.FC<{}> = () => {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const {
        data: { tracks: trackResults },
      } = await API.get<TrackResponse>(`/tracks/top?offset=${Math.random() * 200 | 0}`);
      setTracks(trackResults);
    };

    fetchTracks();
  }, []);

  return <TrackGrid tracks={tracks} />;
};

export default TrackDoodad;
