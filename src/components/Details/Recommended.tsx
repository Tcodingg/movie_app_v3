import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, recommendedUrl } from "../../tools/url";

interface props {
  id: string;
}
const Description: React.FC<props> = ({ id }) => {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const getRecommended = async () => {
      const { data } = await axios.get(
        `${recommendedUrl}/${id}/recommendations?`,
        {
          params: {
            movie_id: id,
            api_key: API_KEY,
          },
        }
      );
      setRecommended(data.results);
      console.log(recommended);
    };
    getRecommended();
  }, [id]);

  return (
    <div>
      {recommended.map((i: any) => {
        return <p>{i.title}</p>;
      })}
    </div>
  );
};

export default Description;
