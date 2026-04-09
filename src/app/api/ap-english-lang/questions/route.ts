import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ exam: "ap-english-lang", questions: [], message: "Questions endpoint stub" });
}
