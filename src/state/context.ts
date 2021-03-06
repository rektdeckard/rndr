import React, { createContext } from "react";
import { BlockState } from "../types";

type Context = [
  BlockState[],
  React.Dispatch<React.SetStateAction<BlockState[]>>
];

export const BlockContext = createContext<Context>([[], () => {}]);
