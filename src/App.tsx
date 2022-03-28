import "./App.css";
import React from "react";
import styled from "styled-components";

import Layout from "@components/common/layout/Layout";

const App: React.FC<unknown> = () => {
  return (
    <AppContainer className={"App"}>
      <Layout>{process.env.REACT_APP_API_URL}</Layout>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div``;
