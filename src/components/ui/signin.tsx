"use client";

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

const SignInPPage = () => {
  const [number, setNumber] = useState(0);

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
            <form>
              <CardContent>
                <div className="grid gap-4">
                  <Label htmlFor="Email" className="font-sans">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="xxx@gmail.com"
                    type="email"
                  ></Input>
                  <Label htmlFor="Password" className="font-sans">
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

export default SignInPPage;
