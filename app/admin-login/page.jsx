"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });

      if (res?.ok) {
        toast.success("Login successful");
        router.push("/admin");
      } else {
        toast.error("Invalid login");
      }
    } catch (error) {
      toast.error("Login Failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 text-black">
      <div className="bg-white p-8 rounded shadow w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-4"
        />
        <Button
          asChild
          variant={"outline"}
          onClick={handleLogin}
          className="bg-green-600 text-white w-full py-2 rounded  gap-4 font-medium flex"
          justify-center
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex gap-4 items-center">
              <Loader2 className="animate-spin" />
              Logging In...
            </div>
          ) : (
            "Login"
          )}
        </Button>
      </div>
    </div>
  );
}
