import React, { useState } from "react";
import { useAudibleRenders } from "react-audible-debug";
import styled, { createGlobalStyle } from "styled-components";

import Switch from "./Switch";
import ContextDoodad from "./ContextDoodad";
import RecoilDoodad from "./RecoilDoodad";

const Style = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1 {
  font-family: monospace;
  font-size: 16px;
  margin: 8px 0;
}

h2 {
  font-family: monospace;
  font-size: 13px;
  margin: 8px 0;
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 100%;
  background-color: #2b4162;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const App: React.FC<{}> = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [isAudible, setIsAudible] = useState<boolean>(false);

  useAudibleRenders(isAudible);

  return (
    <Container>
      <Style />
      <h1>
        State: {checked ? "Recoil" : "Context"} | Audio: {isAudible.toString()}
      </h1>
      {checked ? <RecoilDoodad /> : <ContextDoodad />}
      <ButtonContainer>
        <Switch checked={checked} onChange={() => setChecked((c) => !c)} />
        <Switch checked={isAudible} onChange={() => setIsAudible((a) => !a)} />
      </ButtonContainer>
    </Container>
  );
};

export default App;
