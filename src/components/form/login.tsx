import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { z } from "zod";
import { loginUser } from "../../redux/auth/authSlice";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
const ErrorMessage = styled.span`
  color: red;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 5px;
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-top: 3px;
  }
`;
const loginSchema = z.object({
  email: z.string().email("Invalid email Format"),
  password: z.string().min(6, "Please enter the correct password"),
});
type loginFormData = z.infer<typeof loginSchema>;
export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const onSubmit =  (data: loginFormData) => {
  
    try {
        const user = dispatch(loginUser(data.email));
  console.log(user)
          navigate("/home"); 
        
      } catch (error) {
        console.error("Login failed:", error);
      
      }
  }
  return (
    <div>
      <h1>Login </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email"> Email:</label>
          <input type="text" {...register("email")} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" {...register("password")} />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
