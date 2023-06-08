import Head from "next/head";

interface props {
  title: string;
}
export default function Seo({ title }: props) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
