import React from "react";
import styled from "styled-components";

interface ContainerModel {
  containerStyle?: React.CSSProperties;
  scrollDisabled?: boolean;
  children?: React.ReactNode;
}

const Layout: React.FC<ContainerModel> = (props) => {
  const { containerStyle = {}, scrollDisabled = false } = props;
  const { children } = props;

  return (
    <Container scrollDisabled={scrollDisabled} containerStyle={containerStyle}>
      {children}
    </Container>
  );
};

export default Layout;

const Container = styled.div<{ scrollDisabled: boolean; containerStyle: React.CSSProperties }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: ${({ scrollDisabled }) => (scrollDisabled ? "hidden" : "auto")};
  ${({ containerStyle }) => ({ ...(containerStyle as object) })};
`;
