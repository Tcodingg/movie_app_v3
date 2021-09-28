import React, { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import { youtube_videos, API_KEY, youtube_link } from "../../tools/url";

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
        // setTrailer(`${youtube_link}${results[0].key}`);
        setTrailer(results[0].key);
      } catch (err) {
        console.log(err);
      }
    };
    getTrailers();
    // console.log(trailer);
  }, [trailer, youtube_video]);
  //   console.log(id);
  return (
    <div>
      <YouTube opts={opts} videoId={trailer} />
    </div>
  );
};

const opts = {
  width: "500px",
  height: "300px",
};
export default YoutubeVideo;
