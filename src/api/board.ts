import axios from "axios";
import { redirect } from "next/navigation";

// 피드 업로드 하기
export async function postPeed(youtubeId: string) {
  const res = await axios.post("/api/peed/upload", {
    youtube_link: youtubeId,
  });

  if(res.status === 200) {
    redirect("http://localhost:3000");
  }
}
