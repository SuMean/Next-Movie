import css from "./page.module.scss"
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

export default async function Home() {
  const data = await fetchData();
  return (
    <div className={css.container}>
      {!data.results && <h4>Loading...</h4>}
      {data.results?.map((movie: Movie) => (
        <div className={css.movie}key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      {/* <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style> */}
    </div>
  );
}
