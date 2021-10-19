import React, { useEffect, useState } from "react";
import { CircularProgress, Container, Grid } from "@mui/material";
import { img_300 } from "../../api";
import "./header.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Header = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHeroes = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=c6e71df9266058e905442cdeaa17931d`
    );
    setLoading(false);
    let random = Math.floor(Math.random() * data.results.length);
    let randomData = data.results[random];
    setContent(randomData);
  };
  useEffect(() => {
    fetchHeroes();
  }, []);
  const {
    id,
    title,
    backdrop_path,
    release_date,
    poster_path,
    vote_average,
    overview,
  } = content;
  return (
    <>
      {loading ? (
        <div className="spinner-container">
          <CircularProgress />
        </div>
      ) : (
        <div className="header">
          <img
            className="header-img"
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt=""
          />
          <Container fluid="sm">
            <div className="header-content">
              <Grid container spacing={2} alignItems="center">
                <Grid item md={4} lg={3}>
                  <img
                    className="header-img-sm"
                    src={`${img_300}${poster_path}`}
                    alt={title}
                  />
                </Grid>
                <Grid item md={6} lg={6}>
                  <h1>{title}</h1>
                  <p>{overview}</p>
                  <p>Rating: {vote_average}</p>
                  <p>Release Date: {release_date}</p>
                  <div className="actions">
                    <button className="add-btn">Add to list</button>
                    <Link to={`/details/${id}`} className="add-btn">
                      View Details
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Header;
