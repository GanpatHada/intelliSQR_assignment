import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { fetchLogin } from "../services/loginService";

const loginSchema = z.object({
    email: z
      .string()
      .nonempty("Email is required") 
      .email("Invalid email format"),
    password: z
      .string()
      .nonempty("Password is required") 
      .min(6, "Password must be at least 6 characters"),
  });
  

type LoginForm = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const onSubmit = async (data: LoginForm) => {
    try {
      const result = await fetchLogin(data.email, data.password);
      if (result.success) return toast.success(result.message);
      return toast.error(result.message);
    } catch (error: any) {
      toast.error(error.message || error);
    }
  };

  return (
    <form id="login-box" onSubmit={handleSubmit(onSubmit)}>
      <h2>Welcome back!</h2>

      <input
        type="text"
        {...register("email")}
        id="email"
        placeholder="UID"
        value={email}
        onChange={(e) => {
            setEmail(e.target.value);
            clearErrors("email");
          }}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <input
        type="password"
        {...register("password")}
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
            setPassword(e.target.value);
            clearErrors("password"); 
          }}
      />
       {errors.password && <p className="error">{errors.password.message}</p>}

      <input  type="submit" id="login-button" value="Login" />
    </form>
  );
};

export default Login;
