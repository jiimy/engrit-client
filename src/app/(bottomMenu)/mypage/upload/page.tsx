'use client';
import { myYoutubeUplaodApi } from '@/api/youtube';
import DropDown from '@/components/dropDown/DropDown';
import YoutubeVideo from '@/components/youtubeVideo/YoutubeVideo';
import { getRelativeTime } from '@/util/day';
import { useQuery } from '@tanstack/react-query';
import s from './upload.module.scss';
import { useGetYoutubeInfoLink } from '@/hooks/useGetYoutubeInfo';
import YoutubeTitle from '@/components/youtubeVideo/YoutubeTitle';
import Loading from '@/components/loading/Loading';

const MyPageUpload = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => myYoutubeUplaodApi(),
    queryKey: ['myYoutubeUpload'],
    staleTime: 1000 * 60 * 5,
  });


  // 정렬된 데이터
  const sortedData = data?.sort(
    (a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  // const { title, channelTitle, thumbNail } = useGetYoutubeInfoLink();

  console.log('dd', data);

  return (
    <>
      <ul className={s.list}>
        {isLoading ? <Loading /> :
          <>
            {sortedData?.map((item: any, index: any) => (
              <li key={index} className={s.item}>
                <div className={s.video}>
                  <YoutubeVideo videoId={item.youtube_link} />
                </div>
                <div>
                  <div className={s.title}>
                    <p>
                      <YoutubeTitle Link={item.youtube_link} />
                    </p>
                    <DropDown sendUploader={item.uploader} />
                  </div>
                  {getRelativeTime(item.created_at)}
                </div>
              </li>
            ))}
          </>
        }
      </ul>
    </>
  );
};

export default MyPageUpload;
