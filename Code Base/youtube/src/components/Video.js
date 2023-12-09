import React from "react";

const Video = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="p-2 m-3 cursor-pointer w-80">
      <img src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default Video;
