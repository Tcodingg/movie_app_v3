import "./style.css";
import "../../index.css";
import { useParams } from "react-router-dom";

import YoutubeVideo from "./YoutubeVideo";
import Description from "./Description";
import Recommended from "./Recommended";

const Details: React.FC = () => {
  const params: { id: string } = useParams();

  return (
    <section className="section details">
      <div className="youtube-and-description">
        <YoutubeVideo id={params.id} />
        <Description id={params.id} />
      </div>
      <Recommended id={params.id} />
    </section>
  );
};

export default Details;
