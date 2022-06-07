import styled from "styled-components";

export const StyledWizardCard = styled.div`
  width: 160px;
  height: 160px;
  overflow: hidden;

  position: relative;

  border-radius: 10px;

  cursor: pointer;

  img {
    width: 100%;
  }

  .name-container {
    position: absolute;
    bottom: 0;
    width: 100%;

    text-align: center;

    background-color: rgba(0, 0, 0, 0.5);
  }
`;
