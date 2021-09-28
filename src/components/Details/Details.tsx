import { useParams } from "react-router-dom";

import YoutubeVideo from "./YoutubeVideo";
import Description from "./Description";
import Recommended from "./Recomended";

const Details: React.FC = () => {
  const params: { id: string } = useParams();

  return (
    <div>
      <YoutubeVideo id={params.id} />
      <Description id={params.id} />
      <Recommended id={params.id} />
    </div>
  );
};

export default Details;
