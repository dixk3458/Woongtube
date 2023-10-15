import React from 'react';
import { useParams } from 'react-router-dom';
import VideoHomeCard from '../components/VideoHomeCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function VideoHome() {
  const { category } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', category], async () => {
    return axios
      .get(`/mock/${category ? category : 'popular'}.json`)
      .then(res => res.data.items);
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
