import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, recommendedUrl, poster_url } from "../../tools/url";
import { Link } from "react-router-dom";
interface props {
  id: string;
}
const Description: React.FC<props> = ({ id }) => {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const getRecommended = async () => {
      try {
        const {
          data: { results },
        } = await axios.get(`${recommendedUrl}/${id}/recommendations?`, {
          params: {
            movie_id: id,
            api_key: API_KEY,
          },
        });
        setRecommended(results);
      } catch (err) {
        return console.log(err);
      }
    };
    getRecommended();
  }, [id]);

  return (
    <div className="recommended">
      <h1>Recommended:</h1>
      <div>
        {recommended.map((i: any) => {
          return (
            <Link to={`/details/${i.id}`}>
              <img src={`${poster_url}${i.poster_path}`} alt="" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Description;
