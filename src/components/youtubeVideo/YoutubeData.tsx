'use client';
import Image from 'next/image';

const YoutubeData = ({ thumbnails, title, channelTitle, children }:
  { thumbnails: string; title: string; channelTitle: string; children?: React.ReactNode }) => {

  return (
    <div>
      <div className='flex'>
        <div className='w-full h-full mr-12 overflow-hidden rounded-full max-w-32 max-h-32 min-w-32 min-h-32'>
          <Image src={thumbnails} width={32} height={32} alt={title} />
        </div>
        <div className='flex justify-between'>
          <div>
            <p className='text-[#262626'>{title}</p>
            <span className='text-[#8C8C8C]'>{channelTitle}</span>
          </div>
          <div className='flex flex-col'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeData;