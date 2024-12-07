import axios from "axios";

// 문의 글 전체 불러오기
export async function getInquiries() {
  try {
    const res = await axios.get("/api/user/getInquiriesAll");

    if (res.status === 200) {
      return res.data.data;
    }
  } catch (error) {
    console.error("Error fetching feed data:", error);
    return [];
  }
}

// 문의 글 index 불러오기
export async function getInquiriesID(id: number) {
  try {
    const res = await axios.get(`/api/user/getInquiriesAll/${id}`);

    if (res.status === 200) {
      return res.data.data;
    }
  } catch (error) {
    console.error("Error fetching feed data:", error);
    return [];
  }
}
