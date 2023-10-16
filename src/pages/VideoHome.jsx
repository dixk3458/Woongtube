import React from 'react';
import { useParams } from 'react-router-dom';
import VideoHomeCard from '../components/VideoHomeCard';
import { useQuery } from '@tanstack/react-query';
import { FakeYoutube } from '../api/fakeYoutube';
import { Youtube } from '../api/youtube';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function VideoHome() {
  const { category } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', category], () => {
    return youtube.filter(category);
  });

  return (
    <>
      <div>{category}videohome</div>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러😜</p>}
      {videos && (
        <ul>
          {videos.map(video => (
            <VideoHomeCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
