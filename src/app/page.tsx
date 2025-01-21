import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if(!session) {
    redirect("/login");
  }
  return (
    <p>Hello, {session.user.name}</p>
  );
}

// npx prisma init

// npm install better-auth

// npx prisma generate //lade in något enkelt så att det gick att köra

// npx @better-auth/cli generate

// npx prisma db push

//   npm run dev 