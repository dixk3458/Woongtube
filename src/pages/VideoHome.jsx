import React from 'react';
import { useParams } from 'react-router-dom';
import VideoHomeCard from '../components/VideoHomeCard';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function VideoHome() {
  const { category } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ['videos', category],
    () => {
      return youtube.filter(category);
    },
    { staleTime: 1000 * 60 * 1 }
  );

  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러😜</p>}
      {videos && (
        <ul className="mr-20 basis-3/5">
          {videos.map(video => (
            <VideoHomeCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
