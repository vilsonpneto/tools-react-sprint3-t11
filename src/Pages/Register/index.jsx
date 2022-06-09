import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  TextField,
} from "@mui/material";

import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";

import { FlexContainer } from "../../styles/global";
import { StyledForm, StyledTypography } from "./styles";

export const Register = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Require field!")
      .min(3, "Minimum 3 characters"),
    email: yup.string().required("Require field!").email("Email invalid"),
    password: yup
      .string()
      .required("Require field!")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Password must contain at least one capital letter, one number and one special character!"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not match!"),
    terms: yup.boolean().isTrue("You not accepted terms!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const signUp = (data) => console.log(data);

  return (
    <>
      <Header />
      <StyledForm onSubmit={handleSubmit(signUp)}>
        <Paper elevation={3}>
          <StyledTypography batata="10px" variant="p" component="h2">
            Register
          </StyledTypography>

          <FlexContainer flexDirection="column" justifyContent="center">
            {/* Exemplo de utilização do Input criado */}
            {/* <Input
              label="Username"
              name="username"
              register={register}
              error={errors.username}
            /> */}

            <TextField
              required
              error={!!errors.username}
              helperText={errors?.username?.message}
              label="Username"
              {...register("username")}
            />

            <TextField
              required
              error={!!errors.email}
              helperText={errors?.email?.message}
              label="Email"
              {...register("email")}
            />

            <TextField
              required
              error={!!errors.password}
              helperText={errors?.password?.message}
              label="Password"
              {...register("password")}
              type="password"
            />

            <TextField
              required
              error={!!errors.confirmPassword}
              helperText={errors?.confirmPassword?.message}
              label="Confirm password"
              {...register("confirmPassword")}
              type="password"
            />

            <FormControlLabel
              error={!!errors.terms}
              control={<Checkbox {...register("terms")} />}
              label="Accept terms?"
            />
            {errors.terms && (
              <span className="error"> {errors.terms.message}</span>
            )}

            <Button variant="contained" type="submit">
              Create an Account
            </Button>
          </FlexContainer>
        </Paper>
      </StyledForm>
    </>
  );
};
