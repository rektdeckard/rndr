import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { colorBlocks } from "../state/recoil";

const Container = styled.div<{ $active: boolean }>`
  height: 100%;
  width: 100%;
  border-radius: 16px;
  color: white;
  background: ${({ $active }) => $active ? "#FFC914" : "#2f2f2f"};
  padding: 16px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background 200ms ease;

  &:hover {
    background: #e4572e;
  }
`;

interface RecoilBlockProps {
  id: number;
}

const RecoilBlock: React.FC<RecoilBlockProps> = ({ id }) => {
  const [block, setBlock] = useRecoilState(colorBlocks(id));
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setBlock((block) => ({ ...block, interval: (2 ** id) * 500 }));
  }, [id, setBlock]);

  useEffect(() => {
    timerRef.current = setInterval(
      () => setBlock((block) => ({ ...block, active: !block.active })),
      block.interval
    );
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [block, setBlock]);

  return (
    <Container
      onClick={() => setBlock((block) => ({ ...block, active: !block.active }))}
      $active={block.active}
    />
  );
};

export default RecoilBlock;
