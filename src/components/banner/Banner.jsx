import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./banner.css";

const Banner = () => {
  const [content, setContent] = useState([]);

  const fetchItem = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=c6e71df9266058e905442cdeaa17931d`
    );
    setContent(data.results[3]);
  };
  useEffect(() => {
    fetchItem();
  }, []);
  return (
    <div className="section">
      <Grid container spacing={2} align-items="center" justifyContent="center">
        <Grid item md={8} lg={6}>
          <img
            src={`https://image.tmdb.org/t/p/original${content.backdrop_path}`}
            alt={content.title}
          />
        </Grid>
        <Grid item md={8} lg={6}>
          <h1>{content.title}</h1>
          <p>Rating: {content.vote_average}</p>
          <p>{content.overview}</p>
          <div className="button">
            <Link to={`/details/${content.id}`} className="add-btn">
              View Details
            </Link>

            <button className="add-btn">Add to list</button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
