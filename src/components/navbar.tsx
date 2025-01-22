"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
//import { useRouter } from "next/router";

export default function NavBar() {
    const session = authClient.useSession();
    const router = useRouter();

    return (
      <header className="bg-primary">
        <div className="flex justify-between py-4 container mx-auto">
          <div>
            <h1 className="text-primary-foreground text-2xl font-bold">My Blog</h1>
          </div>
          {session.isPending ? (
          <div>
              <p className="text-primary-foreground">Loading...</p> 
          </div>
          
           ) : 
           !session.data ? (
            <div className="flex gap-2">
              <Link href="/login">
              <Button
              variant={"secondary"}
              >Login</Button>
              </Link>
  
              <Link href="/signup">
              <Button
              variant={"secondary"}
              >Sign up</Button>
              </Link>
              
            </div>) : 

            (
                <div>
                    <Button
              variant={"secondary"}
              onClick={() => authClient.signOut().then(router.refresh)}
              >Logout</Button>
                </div>
            )
           
           }
          
        </div>
      </header>
    );
}