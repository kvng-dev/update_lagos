"use client";
import { signOut } from "next-auth/react";

export function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/admin-login" })}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
}
