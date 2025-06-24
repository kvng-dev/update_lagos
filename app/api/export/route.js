import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  const headers = [
    "Name",
    "Email",
    "Phone",
    "School",
    "Course",
    "Message",
    "Matric Number",
  ];

  const rows = users.map((user) => [
    user.name,
    user.email,
    user.phone,
    user.school,
    user.course,
    user.message ?? "",
    user.matricNumber,
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
