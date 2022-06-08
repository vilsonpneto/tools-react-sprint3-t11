import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Header } from "../../Components/Header";

import { FlexContainer } from "../../styles/global";
import { StyledForm } from "./styles";

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
        <FlexContainer flexDirection="column" justifyContent="center">
          <label>Username: </label>
          <input type="text" {...register("username")} />
          {/* <span> {errors?.username?.message}</span> */}
          {errors.username && (
            <span className="error"> {errors.username.message}</span>
          )}

          <label>Email: </label>
          <input type="text" {...register("email")} />
          {errors.email && (
            <span className="error"> {errors.email.message}</span>
          )}

          <label>Password: </label>
          <input type="password" {...register("password")} />
          {errors.password && (
            <span className="error"> {errors.password.message}</span>
          )}

          <label>Confirm password: </label>
          <input type="password" {...register("confirmPassword")} />
          {errors.confirmPassword && (
            <span className="error"> {errors.confirmPassword.message}</span>
          )}

          <div>
            <input type="checkbox" {...register("terms")} />
            <span>Accept terms?</span>
          </div>
          {errors.terms && (
            <span className="error"> {errors.terms.message}</span>
          )}

          <button type="submit">Create an Account</button>
        </FlexContainer>
      </StyledForm>
    </>
  );
};
