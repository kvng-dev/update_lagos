// app/api/delete-user/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // adjust if your prisma client is elsewhere
import { revalidatePath } from "next/cache";

export async function DELETE(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    revalidatePath("/admin");
    return NextResponse.json({ message: "User deleted", user: deletedUser });
  } catch (error) {
    console.error("Delete user error:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
