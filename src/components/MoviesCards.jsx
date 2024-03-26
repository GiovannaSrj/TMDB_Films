import "../styles/moviesCards.css";
import PopularityCircle from "../components/PopularityCircle";

export default function MoviesCards({ movie }) {
  return (
    <>
      <div className="card_container">
        <div className="img_container">
          <a href="#">
            <span className="saiba_mais">
            </span>
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt=""
            />
          </a>
        </div>

        <div className="inf_container">
          <PopularityCircle
            className="pop"
            pop={Math.ceil(movie.vote_average * 10)}
          />
          <div className="name">
            <a href="#">{movie.original_title}</a>
          </div>
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
