"use client";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Label } from "./label";
import { Input } from "./input";
import { Button } from "./button";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { SignInSchema } from "~/schema/auth";
import { on } from "events";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
// import { redirect } from "next/dist/server/api-utils";

type Values = z.infer<typeof SignInSchema>;

const SignUp = () => {
  const router = useRouter();

  const [number, setNumber] = useState(0);
  // const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({ resolver: zodResolver(SignInSchema) });

  const onSubmit = async (data: Values) => {
    const respopnse = await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: "/dashboard",
      redirect: false,
    });
    //@ts-ignore
    if (respopnse.error) {
      toast.error("Something went wrong, please try again.");
      //@ts-ignore
    } else if (respopnse.ok) {
      toast.success("Successfully signed in!");
      // redirect to dashboard
      // router.push("/dashboard");
      router.push("/dashboard");
    }

    // const respopnse = await signIn("credentials", {
    //   email: data.email,
    //   password: data.password,
    //   callbackUrl: "/dashboard",
    //   redirect: false,
    // });
    // if (respopnse.error) {
    //   toast({
    //     // @ts-ignore
    //     title: "Error",
    //     description: "something went wrong",
    //     variant: "destructive",
    //   });
    // }
    toast("submitting you data");
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <IoChevronBackSharp className="h-4 w-4" />
            <p className="font-normal">Go Back</p>
          </Link>
          <Card className="w-screen max-w-sm">
            <CardHeader>
              <CardTitle className="text-xl">Signin</CardTitle>
              <CardDescription>
                Enter Your Email and Password Below
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent>
                <div className="grid gap-4">
                  <Label htmlFor="Email" className="font-sans">
                    Email
                  </Label>
                  <Input
                    {...register("email")}
                    id="email"
                    placeholder="xxx@gmail.com"
                    type="email"
                  ></Input>
                  <Label
                    htmlFor="Password"
                    className="font-sans"
                    {...register("password")}
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    placeholder="*******"
                    type="password"
                  ></Input>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col px-4 py-6">
                <Button type="submit" className="w-84">
                  SignIn
                </Button>
              </CardFooter>
              <Link href="/signup" className="flex-grid flex">
                <p className="flex flex-col px-7 text-gray-500">
                  Do not have account?
                </p>

                {/* <Button className="flex flex-col">Sign In</Button> */}
              </Link>
              {/* <p>
                test account: <span className="text-blue-500"> test </span>
              </p> */}
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignUp;
