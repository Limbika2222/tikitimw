import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const cwd = process.cwd();

  const dbPath = path.resolve(cwd, "prisma/dev.db");

  return NextResponse.json({
    cwd,
    DATABASE_URL: process.env.DATABASE_URL,
    dbPath,
    exists: fs.existsSync(dbPath),
  });
}