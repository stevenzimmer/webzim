// import NextAuth from "next-auth/next";
// import { authOptions } from "@/utils/auth";

import { NextRequest, NextResponse } from "next/server";

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
export async function POST(req: NextRequest, res: NextResponse) {
  console.log({ req });
  // res.status(200).json({ name: "John Doe" });
  res.json();
}
