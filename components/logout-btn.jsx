"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export function LogoutButton() {
  return (
    <Button
      variant={"destructive"}
      onClick={() => signOut({ callbackUrl: "/admin-login" })}
      className="font-medium cursor-pointer"
    >
      <LogOut />
      Logout
    </Button>
  );
}
