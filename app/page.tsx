import Link from "next/link";
import css from "./page.module.scss";
type Movie = {
  id: number;
  original_title: string;
  poster_path: string;
};
async function fetchData() {
  const res = await fetch(`http://localhost:3000/api/movies`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}
export const metadata = {
  title: " Home | Next Movies",
  description: "영화 홈페이지 입니다.",
};

export default async function Home() {
  const data = await fetchData();
  return (
    <div className={css.container}>
      {!data.results && <h4>Loading...</h4>}
      {data.results?.map((movie: Movie) => (
        <Link
          className={css.link}
          href={{
            pathname: `/movies/${movie.id}`,
            query: {
              title: movie.original_title,
            },
          }}
        >
          <div className={css.movie} key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}
