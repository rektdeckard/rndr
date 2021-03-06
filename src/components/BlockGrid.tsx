import React, { memo } from "react";
import styled from "styled-components";
import Block from "./Block";
import RecoilBlock from "./RecoilBlock";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 300px 300px 300px;
  gap: 16px;
`;

const BOX_COUNT = 9;
const ids = Array(BOX_COUNT)
  .fill(null)
  .map((_, index) => index);

interface BlockGridProps {
  isRecoil?: boolean;
}

const BlockGrid: React.FC<BlockGridProps> = memo(({ isRecoil = false }) => {
  return (
    <Grid>
      {ids.map((id) =>
        isRecoil ? <RecoilBlock key={id} id={id} /> : <Block key={id} id={id} />
      )}
    </Grid>
  );
});

export default BlockGrid;
