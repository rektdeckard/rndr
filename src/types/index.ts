interface Format {
  type: "format";
  bitrate: number;
  name: string;
  sampleBits: number;
  sampleRate: number;
}

interface Contributors {
  guestMusician?: string;
  producer?: string;
  featuredPerformer?: string;
  primaryArtist?: string;
  engineer?: string;
  composer?: string;
  remixer?: string;
}

export interface Track {
  type: "track";
  id: string;
  index: number;
  disc: number;
  href: string;
  playbackSeconds: number;
  isExplicit: boolean;
  name: string;
  isrc: string;
  shortcut: string;
  blurbs: string[];
  artistName: string;
  albumName: string;
  albumId: string;
  formats: Format[];
  losslessFormats: Format[];
  contributors: Contributors;
  previewURL: string;
  isStreamable: boolean;
  links: object;
}

export interface TrackResponse {
  meta: {
    totalCount: number;
    returnedCount: number;
  };
  tracks: Track[];
}

export interface BlockState {
  id: number;
  interval: number;
  active: boolean;
}