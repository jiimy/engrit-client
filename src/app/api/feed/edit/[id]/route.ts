import { createClient } from "@/util/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
// import { redirect } from "next/navigation";

export async function PUT(
  // export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { tag } = await request.json();
    if (!tag) {
      throw new Error("context_text is required");
    }

    const { data, error } = await supabase
      .from("youtube")
      .update({ tag: tag })
      .eq("id", id);

    // if (error) {
    //   console.error("Supabase Error:", error);
    //   return NextResponse.json({ error: error.message }, { status: 500 });
    // }

    // return NextResponse.redirect(`${origin}${next}`);
    return NextResponse.json({ message: "Post created successfully" });
  } catch (error) {
    return NextResponse.json({ error: request }, { status: 500 });
  }
}
