export const runtime = "edge";
const apiKey = "AIzaSyDDGQ-GkgcsTSO4zsZ9epfjbWnMhDjER94"; // 여기에 API 키를 입력하세요.

// 유튜브 스크립트 추출
export const fetchTranscript = async (id: string) => {
  try {
    const response = await fetch(`/api/youtube?videoId=${id}`);
    console.log("id", id);
    const data = await response.json();
    console.log("실행?", response);
    return data?.transcript[0];
    // setTranscript(data?.transcript[0]?.text);
  } catch (err) {
    console.log("스크립트 추출 실패");
  }
};

// 유튜브 정보 추출
export const fetchVideoInfo = async (id: string) => {
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}&part=snippet`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if (data.items.length > 0) {
      return data.items[0];
    } else {
      console.log("No video found");
    }
  } catch (err) {
    console.log("유튜브 정보 추출 실패", err);
  }
};

// 유튜브 채널 정보 추출
export const fetchChannelInfo = async (id: string) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?id=${id}&key=${apiKey}&part=snippet`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.items[0];
  } catch (err) {
    console.error(err);
  }
};
