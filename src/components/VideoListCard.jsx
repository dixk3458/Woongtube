import React from 'react';
import formatAgo from '../util/date';

export default function VideoListCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img
        className="w-full rounded-lg"
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className="flex gap-2">
        <img
          className="w-16 h-16 my-2 rounded-full dark:text-darkBasicText"
          src=""
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
