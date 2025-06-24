// app/api/submit/route.ts

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { name, email, message, phone } = body;

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const submission = await prisma.user.create({
    data: { name, email, message, phone },
  });

  return NextResponse.json({ success: true, submission });
}
