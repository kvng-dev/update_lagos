// app/api/admin/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Adjust this if your path is different
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user?.name !== "Admin") {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const submissions = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ submissions });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
