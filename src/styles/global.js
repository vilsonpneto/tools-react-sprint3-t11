import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;

      box-sizing: border-box;
    }

    h1, h2, h3, h4, p, label, span {
    color: #EEE;
  }

  body {
      background-color: #147;
  }

  button {
      cursor: pointer ;
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  flex-wrap: ${(props) => props.flexWrap || "wrap"};
  gap: ${(props) => props.gap || "20px"};

  padding: 10px;
`;
