import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: channelInfo,
  } = useQuery(['channelInfo', id], () => {
    return youtube.channelInfo(id);
  });

  return (
    <>
      {isLoading && <p>로딩중</p>}
      {error && <p>에러...</p>}
      {channelInfo && (
        <div className="flex items-center my-4 mb-8 ">
          <img
            className="w-16 h-16 rounded-full"
            src={channelInfo.snippet.thumbnails.default.url}
            alt={name}
          />
          <div className="ml-2 text-lg font-medium dark:text-darkBasicText">
            <p>{channelInfo.snippet.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
