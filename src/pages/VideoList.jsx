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
    <div>
      <div>{keyword}</div>
      {isLoading && <p>로딩중....</p>}
      {error && <p>에러😜....</p>}
      {videos &&
        videos.videoItems.map(video => (
          <VideoListCard key={video.id} video={video} />
        ))}
    </div>
  );
}
