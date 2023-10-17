import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoListCard from '../components/VideoListCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function VideoList() {
  let { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    return youtube.search(keyword);
  });

  return (
    <div className="px-12 ">
      {isLoading && <p>로딩중....</p>}
      {error && <p>에러😜....</p>}
      {videos && (
        <ul className=" grid grid-cols-1 gap-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:gird-cols-4 ">
          {videos.videoItems.map(video => {
            return <VideoListCard key={video.id} video={video} />;
          })}
        </ul>
      )}
    </div>
  );
}
