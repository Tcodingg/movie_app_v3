import React, { useEffect, useState } from "react";
import axios from "axios";
import { youtube_videos, API_KEY, youtube_url } from "../../tools/url";

interface props {
  id: string;
}
const YoutubeVideo: React.FC<props> = ({ id }) => {
  const [trailer, setTrailer] = useState("");
  const youtube_video = `${youtube_videos}${id}/videos?api_key=${API_KEY}`;

  useEffect(() => {
    const getTrailers = async () => {
      try {
        const {
          data: { results },
        } = await axios.get(youtube_video);

        setTrailer(results[0].key);
      } catch (err) {
        console.log(err);
      }
    };

    getTrailers();
  }, [trailer, youtube_video]);
  return (
    <div className="youtube-video">
      <iframe
        width="853"
        height="480"
        src={`${youtube_url}/${trailer}`}
        frameBorder="0"
      />
    </div>
  );
};

export default YoutubeVideo;
