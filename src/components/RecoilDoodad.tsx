import React from "react";
import { RecoilRoot } from "recoil";
import BlockGrid from "./BlockGrid";

const RecoilDoodad: React.FC<{}> = () => {
  return (
    <RecoilRoot>
      <BlockGrid isRecoil />
    </RecoilRoot>
  );
};

export default RecoilDoodad;