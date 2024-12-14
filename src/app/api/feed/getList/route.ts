import { createClient } from "@/util/supabase/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase
      .from("youtube")
      .select("*")
      .order("id", { ascending: true });
    
    if (error) {
      throw error;
    }
    // res.status(200).json(data);
    console.log("dd", data);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    // res.status(500).json({ error: error });
    return NextResponse.json({ error }, { status: 500 });
  }
}
