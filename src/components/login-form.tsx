"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogInForm () {
    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    return (
        <div>
            <form>
                <input 
                disabled={isLoading}
                type="email" 
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                />
                <input 
                disabled={isLoading}
                type="password" 
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                />
                <button
                disabled={isLoading}
                onClick={async () =>
                    await authClient.signIn.email({
                            email,
                            password,
                            fetchOptions: {
                                onRequest: () => {setIsLoading(true)},
                                onResponse: () => {setIsLoading(false)},
                                onError: () => {},
                                onSuccess: () => {router.push("/")},

                            }
                    })
                }
                
                >
                    {isLoading ? "Loading..." : "Sign in"}
                </button>
            </form>
        </div>
    )
}