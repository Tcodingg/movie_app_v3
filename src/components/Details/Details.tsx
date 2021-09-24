import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { youtube_videos, API_KEY, youtube_link } from "../../redux/url";
import axios from "axios";

const Details: React.FC = () => {
  const params: { id: string } = useParams();
  const youtube_video = `${youtube_videos}${params.id}?api_key=${API_KEY}`;

  useEffect(() => {
    const getTrailers = async () => {
      try {
        const youtube_trailer = await axios.get(youtube_video);
        console.log(youtube_trailer.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTrailers();
  }, [youtube_video]);

  return <div></div>;
};

export default Details;
