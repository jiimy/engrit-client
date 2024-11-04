import axios from "axios";

// 유튜브 스크립트 추출
export async function fetchTranscript(id: string, viewLength?: number) {
  try {
    const response = await axios.get(`/api/youtube?videoId=${id}`);

    if (response?.data?.transcript) {
      const transcript = response?.data?.transcript;
      if (viewLength !== undefined && viewLength < transcript.length) {
        return transcript[viewLength];
      } else {
        return transcript;
      }
    }
  } catch (err) {
    console.log("스크립트 추출 실패", err);
  }
}

// 유튜브 정보 추출
export async function fetchVideoInfo(id: string) {
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&part=snippet`;

  try {
    const response = await axios.get(url);
    if (response.data.items.length > 0) {
      return response.data.items[0];
    } else {
      console.log("No video found");
    }
  } catch (err) {
    console.log("유튜브 정보 추출 실패", err);
  }
}

// 유튜브 채널 정보 추출
export async function fetchChannelInfo(id: string) {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?id=${id}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&part=snippet`
    );
    return response.data.items[0];
  } catch (err) {
    console.error(err);
  }
}

// 비디오의 채널 프로필 이미지 가져오기
export async function getChannelProfileImage(videoId: string) {
  const videoInfo = await fetchVideoInfo(videoId);
  if (videoInfo) {
    const channelId = videoInfo.snippet.channelId;
    const channelInfo = await fetchChannelInfo(channelId);
    if (channelInfo) {
      return channelInfo.snippet.thumbnails.default.url;
    }
  }
  return null;
}
