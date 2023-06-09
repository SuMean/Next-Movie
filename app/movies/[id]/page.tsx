"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Detail() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  return (
    <div>
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}
