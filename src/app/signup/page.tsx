"use server";
import { auth } from "~/server/auth";
import { redirect } from "next/navigation";
// import SignInPPage from "~/components/ui/signin";
import SignUp from "~/components/ui/siginup";

export default async function SignInPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div>
      <SignUp />
    </div>
  );
}
