import React, { useEffect } from "react";
import "./Detail.css";

function Detail({ location, history }) {
  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  }, [location, history]);
  if (location.state) {
    return (
      <div className="movie__detail">
        <div className="detail__information">
          <div>
            <img
              src={location.state.back}
              alt={location.state.title}
              title={location.state.title}
            />
          </div>
          <div className="detail__desc">
            <h1 className="'title">{location.state.title}</h1>
            <h4 className="yearAndGenres">
              {location.state.year} •{" "}
              {location.state.genres.map((genre) => (
                <span>{genre} / </span>
              ))}
            </h4>
            <p className="summary">{location.state.summary}</p>
          </div>
        </div>
        <div
          className="blur_background"
          style={{
            background: `url(${location.state.back})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    );
  } else {
    return null;
  }
}

export default Detail;
