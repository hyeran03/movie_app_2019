import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail__container">
          <img
            src={"https://image.tmdb.org/t/p/w500" + location.state.poster_path}
            alt={location.state.title}
          />
          <div className="detail__info-box">
            <h2 className="detail__title">{location.state.title}</h2>
            <h5 className="detail__release-date">
              {location.state.release_date}
            </h5>
            <span className="detail__popularity">
              {location.state.popularty}
            </span>
            <p className="detail__overview">{location.state.overview}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
