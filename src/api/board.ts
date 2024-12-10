import axios from "axios";
import { redirect } from "next/navigation";

// 피드 목록 불러오기
export async function readPeedApi() {
  try {
    const res = await axios.get("/api/feed/getList");

    if (res.status === 200) {
      return res.data.data;
    }
  } catch (error) {
    console.error("Error fetching feed data:", error);
    return [];
  }
}
// 피드 업로드 하기
export async function postPeed(youtubeId: string) {
  try {
    console.log("API 요청 데이터:", { youtube_link: youtubeId });
    const res = await axios.post("/api/feed/upload", {
      youtube_link: youtubeId,
    });
    console.log("API 응답:", res.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected Error:", error);
    }
    throw new Error("Failed to post feed data");
  }
}

// 피드 삭제하기
export async function deletePeedApi(id: number) {
  const res = await axios.delete("/api/feed/delete", {
    data: { id },
  });
}

// const response = await axios.delete(apiUrl, {data: dataObj});
