import "./App.css";
import React from "react";
import styled from "styled-components";

import Layout from "@components/layout/Layout";

const App: React.FC<unknown> = () => {
  return (
    <AppContainer className={"App"}>
      <Layout></Layout>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div``;
