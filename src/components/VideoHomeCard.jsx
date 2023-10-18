import React from 'react';
import ChannelInfo from './ChannelInfo';

export default function VideoHomeCard({ video }) {
  return (
    <div>
      <div className=" pb-10 mb-10 border-b-2 border-darkBasicText">
        <ChannelInfo id={video.snippet.channelId} name={video.title} />
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
