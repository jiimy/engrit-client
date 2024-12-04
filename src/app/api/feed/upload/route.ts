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
    console.log("user", session.data?.user?.email);

    const { youtube_link } = await request.json();
    if (!youtube_link) {
      throw new Error("youtube_link is required");
    }

    const { data, error } = await supabase
      .from("youtube")
      .insert([{ youtube_link, uploader }]);

    // return NextResponse.redirect(`${origin}${next}`);
    revalidatePath("/");
    redirect(`/`);
    return NextResponse.json({ message: "Post created successfully", data });
  } catch (error) {
    return NextResponse.json({ error: request }, { status: 500 });
  }
}
