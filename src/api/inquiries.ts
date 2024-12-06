import axios from "axios";

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