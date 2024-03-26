import { useEffect, useState } from "react";
import "../styles/listMovies.css";
import MoviesCards from "./MoviesCards";

export default function ListMovies() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjEzODE5MzM0NDlkNWQxNWY3ZDBiNmE2YjFmODdhMSIsInN1YiI6IjYxMTcxNmY0MzUwMzk4MDAyZGI3Yzk1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ys_LkZ7sDiPL14OdvOVP0N5VZr3-IbyR1G4BwIeCLXs",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data.results);
      })
      .then((response) => console.log(response))
      .catch((err) => console.error("erro ao conectar", err));
  }, []);

  return (
    <ul className="content_cards">
      {result.map((movie) => (
        <li key={movie.id}>
          <MoviesCards movie={movie} />
        </li>
      ))}
    </ul>
  );
}
