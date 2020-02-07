import React from "react";
import axios from "axios";
import Movies from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    results: []
  };

  getMovies = async () => {
    const {
      data: { results }
    } = await axios.get(
      "https://api.themoviedb.org/4/list/1?api_key=8c3a76b74e0de711e9eef20c4ddf6811"
    );
    console.log(results);
    this.setState({ results, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, results } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {results.map(movie => {
              return (
                <Movies
                  key={movie.id}
                  id={movie.id}
                  release_date={movie.release_date}
                  title={movie.title}
                  overview={movie.overview}
                  poster_path={movie.poster_path}
                  popularity={movie.popularity}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
