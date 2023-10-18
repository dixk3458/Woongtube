import React from 'react';
import formatAgo from '../util/date';
import { useParams, useNavigate } from 'react-router-dom';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function VideoListCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt, channelId } =
    video.snippet;
  const { keyword } = useParams();
  const navigate = useNavigate();
  const isList = type === 'list';

  const handleClick = () => {
    navigate(`/video/${keyword}/${video.id}`, { state: { video: video } });
  };

  const { youtube } = useYoutubeApi();

  const { data: channelInfo } = useQuery(
    ['channelInfo', channelId],
    () => {
      return youtube.channelInfo(channelId);
    },
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <li className={isList ? 'flex gap-1 mb-2 mx-2' : ''} onClick={handleClick}>
      <img
        className={isList ? 'w-60 mr-4  rounded-lg' : 'w-full  rounded-lg'}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className="flex gap-2">
        <img
          className="w-10 h-10 my-2 rounded-full dark:text-darkBasicText"
          src={channelInfo && channelInfo.snippet.thumbnails.default.url}
          alt="channelImage"
        />
        <div>
          <p className="font-semibold my-2 line-clamp-2 dark:text-darkBasicText">
            {title}
          </p>
          <p className="text-sm opacity-80 dark:text-darkBasicText">
            {channelTitle}
          </p>
          <p className="text-sm opacity-80 dark:text-darkBasicText">{`조회수 40만회 • ${formatAgo(
            publishedAt,
            'ko'
          )} `}</p>
        </div>
      </div>
    </li>
  );
}
