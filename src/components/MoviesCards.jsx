import "../styles/moviesCards.css";
import PopularityCircle from "../components/PopularityCircle";

export default function MoviesCards({ movie }) {
  return (
    <>
      <div className="card_container">
        <div className="img_container">
          <a href="a">
              <span className="more">
                <a href="#"><img src="../src/assets/more-circle.svg" alt="" /></a>
              </span>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt=""
              />
          </a>
        </div>
        <PopularityCircle pop={Math.ceil(movie.vote_average * 10)} />
        <div className="inf_container">
          <div className="name">{movie.original_title}</div>
          <div className="date">
            {new Date(movie.release_date).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
    </>
  );
}
