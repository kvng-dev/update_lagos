// components/DeleteButton.tsx
"use client";

import { AlertDialogAction } from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DeleteButton({ id }) {
  const router = useRouter();
  const deleteUser = async (userId) => {
    try {
      const res = await fetch("/api/users/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userId }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Failed to delete user");
      }

      toast.success("User deleted successfully!");
      router.refresh();
    } catch (err) {
      console.error("Error deleting user:", err);
      toast.error("An error occurred while deleting the user.");
    }
  };
  return (
    <AlertDialogAction onClick={() => deleteUser(id)}>
      Continue
    </AlertDialogAction>
  );
}
