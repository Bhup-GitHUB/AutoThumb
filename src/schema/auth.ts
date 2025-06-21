import { string, z } from "zod";

export const SignInSchema = z.object({
  email: string({ required_error: "Email is required" })
    .email("Invalid email address")
    .min(1, "Email is required"),
  password: string({ required_error: "password is required" })
    .min(6, "Password must be at least 6 characters long")
    .max(10, "password can not exceed 10 characters"),
});
