'use client';
import { myYoutubeUplaodApi } from '@/api/youtube';
import { getRelativeTimeDay } from '@/util/day';
import { useQuery } from '@tanstack/react-query';

const MyPageUpload = () => {

  const { data } = useQuery({
    queryFn: () => myYoutubeUplaodApi(),
    queryKey: ['myYoutubeUpload'],
    staleTime: 1000 * 60 * 5
  });

  // const sortDay = data?.sort((a: any, b: any) => a.created_at - b.created_at);
  const sortDay = data?.sort(
    (a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  console.log('dupl', data, sortDay);

  return (
    <>
      <ul>
        <li>
          {sortDay?.map((item: any, index: any) => (
            <div key={index}>
              <div>
                {item.youtube_link}
              </div>
              <div>
                <div className="title">제목 1줄
                  <span>더보기아이콘</span>
                </div>
                {getRelativeTimeDay(item.created_at)}일 전
              </div>
            </div>
          ))}
        </li>
      </ul>
    </>
  );
};

export default MyPageUpload;