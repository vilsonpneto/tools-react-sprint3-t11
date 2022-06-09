import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { Typography } from "@mui/material";

export const StyledForm = styled.form`
  padding: 30px;
  max-width: 400px;

  .error {
    color: #d32f2f;
    font-weight: 400;
    font-size: 0.75rem;
  }
`;

export const StyledTypography = muiStyles.styled(Typography)`
    color: #147;
    margin: ${(props) => props.batata};
`;
