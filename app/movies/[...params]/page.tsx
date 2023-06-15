"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Detail() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const image = searchParams.get("image");
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${image}`}
        className="img"
      ></img>
      <h4>{title || "Loading..."}</h4>
      <style jsx>
        {`
          .img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            
          }
        `}
      </style>
    </div>
  );
}
