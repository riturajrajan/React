import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import Video from "./Video";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data.json();
    setVideos(json.items);
  };

  if(videos.length == 0) {
    return <h1 className="font-bold">Loading...</h1>
  }

  return (
    <div className="flex flex-wrap">
      {videos.map(list => (
        <Link to={"/watch?v=" + list.id} key={list.id}><Video info={list}/></Link>
      ))}
    </div>
  )
};

export default VideoContainer;
