import axios from "axios";
import { redirect } from "next/navigation";

// 피드 업로드 하기
export async function postPeed(youtubeId: string) {
  const res = await axios.post("/api/feed/upload", {
    youtube_link: youtubeId,
  });

  if (res.status === 200) {
    redirect("http://localhost:3000");
  }
}

// 피드 삭제하기
export async function deletePeedApi(id: number) {
  const res = await axios.delete("/api/feed/delete", {
    data: id,
  });

  if (res.status === 200) {
    redirect("http://localhost:3000");
  }
}

// const response = await axios.delete(apiUrl, {data: dataObj});
