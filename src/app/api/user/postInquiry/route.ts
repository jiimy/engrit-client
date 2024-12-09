import { createClient } from "@/util/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

export async function POST(request: Request) {
  try {
    const { searchParams, origin } = new URL(request.url);
    const next = searchParams.get("next") ?? "/";
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const session = await supabase.auth.getUser();
    const uploader = session.data?.user?.email;

    const { context_text } = await request.json();
    if (!context_text) {
      throw new Error("context_text is required");
    }

    const { data, error } = await supabase
      .from("inquiries")
      .insert([{ context_text, uploader }]);

    // return NextResponse.redirect(`${origin}${next}`);
    revalidatePath("/");
    redirect(`/`);
    return NextResponse.json({ message: "Post created successfully", data });
  } catch (error) {
    return NextResponse.json({ error: request }, { status: 500 });
  }
}
