import { atomFamily } from "recoil";
import { BlockState } from "../types";

export const colorBlocks = atomFamily<BlockState, number>({
  key: "colorBlocks",
  default: (id) => ({
    id,
    interval: 200,
    active: false,
  }),
});
