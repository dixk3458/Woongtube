import React from 'react';
import ChannelInfo from './ChannelInfo';
import formatAgo from '../util/date';

export default function VideoHomeCard({ video }) {
  console.log(video);
  return (
    <div>
      <div className=" pb-10 mb-10 border-b-2 border-darkBasicText">
        <div className="flex items-center gap-4">
          <ChannelInfo
            id={video.snippet.channelId}
            name={video.snippet.channelTitle}
            type={'videoHome'}
          />
          <div className="mb-2">
            <p className="font-semibold my-2 line-clamp-2 dark:text-darkBasicText">
              {video.snippet.title}
            </p>
            <p className="text-sm opacity-80 dark:text-darkBasicText">{`조회수 40만회 • ${formatAgo(
              video.snippet.publishedAt,
              'ko'
            )} `}</p>
          </div>
        </div>
        <iframe
          className="rounded-lg"
          id="ytplayer"
          type="text/html"
          width="100%"
          height="405"
          title={video.title}
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
