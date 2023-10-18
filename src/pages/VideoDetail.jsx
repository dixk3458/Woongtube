import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  const { channelId, channelTitle, title, description } = video.snippet;

  return (
    <section className="flex flex-col lg:flex-row ">
      <article className="flex flex-col basis-4/6">
        <iframe
          id="ytplayer"
          type="text/html"
          width="98%"
          height="410"
          className="rounded-lg"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          title={title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="py-6 mr-4">
          <h2 className="text-xl font-bold dark:text-darkBasicText">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap p-4 rounded-lg bg-lightGrayBorder dark:bg-darkDeep text-darkBasicText">
            {description}
          </pre>
        </div>
      </article>
      <section className="basis-2/6 overflow-y-auto">
        <RelatedVideos id={channelId} />
      </section>
    </section>
  );
}
