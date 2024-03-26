import { useState } from "react";
import "./App.css";
import ListMovies from "./components/ListMovies";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
          <div className="nav_names">
            <a href="#">
              <img
                className="logo"
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="TMDB Logo"
              />
            </a>
            <ul className="list_itens">
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">TV Shows</a>
              </li>
              <li>
                <a href="#">People</a>
              </li>
              <li>
                <a href="#">More</a>
              </li>
            </ul>
          </div>
          <div className="nav_icons">
            <ul className="list_itens">
              <li>
                <a href="#" id="more"></a>
              </li>
              <li>
                <a href="#" className="en">EN</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Join TMDB</a>
              </li>
              <li>
                <a href="#" id="search"></a>
              </li>
            </ul>
          </div>
      </header>

      <main>
        <h1>Popular Movies</h1>
        <ListMovies />
      </main>
    </>
  );
}

export default App;
