import React from "react";
import { Link } from "react-router-dom";
import { img_300, unavailable } from "../../api";

const SingleItem = ({ id, poster, title, date, onDragStart }) => {
  return (
    <div className="single-content">
      <Link to={`/details/${id}`} onDragStart={onDragStart}>
        <div>
          <img src={poster ? `${img_300}${poster}` : unavailable} alt={title} />
        </div>
      </Link>
    </div>
  );
};

export default SingleItem;
