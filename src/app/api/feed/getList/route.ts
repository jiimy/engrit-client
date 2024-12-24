import { createClient } from "@/util/supabase/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const pageSize = 10;

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize - 1;

    const { data, error } = await supabase
      .from("youtube")
      .select("*", { count: "exact" })
      .order("id", { ascending: true })
      .range(startIndex, endIndex);

    if (error) {
      throw error;
    }
    // res.status(200).json(data);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    // res.status(500).json({ error: error });
    return NextResponse.json({ error }, { status: 500 });
  }
}
