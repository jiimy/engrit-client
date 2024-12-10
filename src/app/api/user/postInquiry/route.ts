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
    const user_name = session.data?.user?.email;

    const { content_text } = await request.json();
    if (!content_text) {
      throw new Error("context_text is required");
    }

    console.log("받은 text: ", content_text, user_name);

    const { data, error } = await supabase
      .from("inquiries")
      .insert([{ content_text, user_name }]);

    if (error) {
      console.error("Supabase Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // return NextResponse.redirect(`${origin}${next}`);
    revalidatePath("/support");
    redirect(`/support`);
    return NextResponse.json({ message: "Post created successfully", data });
  } catch (error) {
    return NextResponse.json({ error: request }, { status: 500 });
  }
}
