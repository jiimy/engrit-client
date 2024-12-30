'use client';
import Feed from '@/components/feed/Feed';
import { useMyBookMarked } from '@/hooks/useMyBookMarked';
import { UserStore } from '@/store/user';

const Index = () => {
  const { email } = UserStore();
  const { bookmarked, bookmarkedArray, isSuccess } = useMyBookMarked(email);

  console.log('bookmarked', bookmarked);

  return (
    <div>
      {
        isSuccess &&
          bookmarked?.length === 0 ? <>북마크된 피드가 없습니다.</> :
          bookmarked?.map((item: any, index: any) => (
            <div key={index}>
              <Feed
                data={item.youtube}
                isBookmark={bookmarkedArray?.includes(item.youtube.id)}
              />
            </div>
          ))
      }
    </div>
  );
};

export default Index;