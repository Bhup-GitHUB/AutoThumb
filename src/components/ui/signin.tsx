"use client";

import Link from "next/link";
import { useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";

const SignInPPage = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <IoChevronBackSharp className="h-10 w-10" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignInPPage;
