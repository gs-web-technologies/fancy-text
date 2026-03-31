import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { ALLOWED_TYPES, MAX_SIZE } from "@/utils/const";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
     // console.log("receive");
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }

    // Validate size
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: "File too large" }, { status: 400 });
    }

    // Convert to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate safe unique filename
    const ext = file.name.split(".").pop();
    const fileName = `${randomUUID()}.${ext}`;

    // Ensure /public/uploads/ exists
    const uploadDir = join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });

    // Write file to disk
    await writeFile(join(uploadDir, fileName), buffer);

    // Return the public URL
    return NextResponse.json({
      url: `/uploads/${fileName}`,
    });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}