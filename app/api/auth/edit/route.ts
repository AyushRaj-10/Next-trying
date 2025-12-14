import connectDb from "@/lib/db";
import User from "@/model/user.model";
import { getServerSession } from "next-auth";
import authOptions from '@/lib/auth'
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { name, image } = await req.json();

    await connectDb();

    const user = await User.findOneAndUpdate(
      { email: session.user.email },
      { name, image },
      { new: true }
    );

    return NextResponse.json({ message: "Updated", user });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
