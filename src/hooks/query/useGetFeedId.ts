import { getFeedIDApi } from "@/api/board";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export const useGetFeedId = () => {
  const params = useParams<{ id: string }>();
  const videoIndex = parseInt(params.id);

  const {
    data: idData,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["feedId", videoIndex],
    queryFn: () => getFeedIDApi(videoIndex),
  });

  const data = idData && idData[0];
  return { data, isSuccess, isLoading };
};
