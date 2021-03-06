import React, { useState } from "react";
import BlockGrid from "./BlockGrid";
import { BlockState } from "../types";
import { BlockContext } from "../state/context";

const ContextDoodad: React.FC<{}> = () => {
  const blockState = useState<BlockState[]>([]);

  return (
    <BlockContext.Provider value={blockState}>
      <BlockGrid />
    </BlockContext.Provider>
  );
};

export default ContextDoodad;
