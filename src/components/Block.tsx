import React, { useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import { BlockContext } from "../state/context";

const Container = styled.div<{ $active: boolean }>`
  height: 100%;
  width: 100%;
  border-radius: 16px;
  color: white;
  background: ${({ $active }) => ($active ? "#FFC914" : "#2f2f2f")};
  padding: 16px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background 200ms ease;

  &:hover {
    background: #e4572e;
  }
`;

const Block: React.FC<{ id: number }> = ({ id }) => {
  const [blocks, setBlocks] = useContext(BlockContext);
  const timerRef = useRef<NodeJS.Timeout>();
  const block = blocks.find((b) => b.id === id);

  useEffect(() => {
    if (block) {
      timerRef.current = setInterval(
        () =>
          setBlocks((b) => {
            const i = b.indexOf(block);
            return [
              ...b.slice(0, i),
              { ...block, active: !block.active },
              ...b.slice(i + 1),
            ];
          }),
        block.interval
      );
    } else {
      setBlocks((b) => [...b, { id, interval: 2 ** id * 500, active: false }]);
    }
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [id, block, setBlocks]);

  return <Container $active={!!(block?.active)} />;
};

export default Block;
