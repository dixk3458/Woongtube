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
      <article className=" basis-4/6">
        <iframe
          id="ytplayer"
          type="text/html"
          width="98%"
          height="410"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          frameborder="0"
          title={title}
          allowfullscreen
        ></iframe>
        <div className="py-8 ">
          <h2 className="text-xl font-bold dark:text-darkBasicText">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap p-4 rounded-lg bg-lightGrayBorder dark:bg-darkDeep text-darkBasicText">
            {description}
          </pre>
        </div>
      </article>
      <div className="basis-2/6 lg:overflow-auto hover:overflow-y-scroll ">
        <section className="h-full">
          <RelatedVideos id={video.id} />
        </section>
      </div>
    </section>
  );
}
