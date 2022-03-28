import "./App.css";

import React from "react";
import styled from "styled-components";

import Layout from "@components/common/layout/Layout";
import useSample from "@hooks/useSample";

const App: React.FC<unknown> = () => {
  const { count, tempCount, onChange, init } = useSample();

  return (
    <AppContainer className={"App"}>
      <Layout>
        {process.env.REACT_APP_API_URL}
        {count}
      </Layout>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div``;
