// app/api/submit/route.ts

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      school,
      course,
      level,
    } = body;

    if (!name || !email || !phone || !school  || !level) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const submission = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        school,
        course,
        level,
      },
    });

    return NextResponse.json({ success: true, submission });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
