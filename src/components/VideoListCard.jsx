import React from 'react';
import formatAgo from '../util/date';

export default function VideoListCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <img src="" alt="channelImage" />
        <div>
          <p>{title}</p>
          <p>{channelTitle}</p>
          <p>{`조회수 40만회 • ${formatAgo(publishedAt, 'ko')} `}</p>
        </div>
      </div>
    </li>
  );
}
