import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { youtube_videos, API_KEY, youtube_link } from "../../redux/url";
import axios from "axios";

const Details: React.FC = () => {
  const params: { id: string } = useParams();
  const youtube_video = `${youtube_videos}${params.id}/videos?api_key=${API_KEY}`;
  const [trailer, setTrailer] = useState<string>("");

  useEffect(() => {
    const getTrailers = async () => {
      try {
        const {
          data: { results },
        } = await axios.get(youtube_video);
        setTrailer(`${youtube_link}${results[0].key}`);
      } catch (err) {
        console.log(err);
      }
    };
    getTrailers();
    console.log(trailer);
  }, [trailer, youtube_video]);

  return <div></div>;
};

export default Details;
