import React from 'react';

export default function VideoHomeCard({ video }) {
  return (
    <div>
      <a href="">
        <img src="" alt="channelImage" />
      </a>
      <div>
        <div>
          <div>
            <a href="">{video.snippet.channelId}</a>
            <p>{video.snippet.title}</p>
          </div>
          <button>팔로우</button>
        </div>
        <iframe
          id="ytplayer"
          type="text/html"
          width="720"
          height="405"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
