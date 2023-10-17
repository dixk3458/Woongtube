import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoListCard from './VideoListCard';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', id], () => {
    return youtube.relatedVideos(id);
  });

  return (
    <ul className="overflow-auto">
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러...</p>}
      {videos &&
        videos.videoItems.map(video => {
          return <VideoListCard key={video.id} video={video} type="list" />;
        })}
    </ul>
  );
}
