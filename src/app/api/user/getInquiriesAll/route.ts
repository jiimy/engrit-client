import { createClient } from "@/util/supabase/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const session = await supabase.auth.getUser();
    const user_name = session?.data?.user?.email;

    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .eq("user_name", user_name);

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    // res.status(500).json({ error: error });
    return NextResponse.json({ error }, { status: 500 });
  }
}
