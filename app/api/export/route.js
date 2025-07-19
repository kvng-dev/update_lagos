import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.name !== "Admin") {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  const headers = ["Name", "Email", "Phone", "School", "Course", "Level"];

  const rows = users.map((user) => [
    user.name,
    user.email,
    user.phone,
    user.school,
    user.course,
    user.level,
  ]);

  const csvContent =
    headers.join(",") +
    "\n" +
    rows.map((row) => row.map(escapeCSV).join(",")).join("\n");

  return new NextResponse(csvContent, {
    status: 200,
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": 'attachment; filename="submissions.csv"',
    },
  });
}

function escapeCSV(val) {
  if (!val) return "";
  const escaped = val.replace(/"/g, '""');
  return `"${escaped}"`;
}
