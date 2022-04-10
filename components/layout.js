import Head from "next/head";
import Footer from "./footer";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="developpeur, web, kevin, mitermite, fullstack, developer, web, laravel, nextjs, mysql, mongodb"
        />
        <meta
          name="description"
          content="Kevin Mitermite, développeur web junior full stack en alternance avec Michelin et ENI Ecole Informatique."
        />
        <meta name="author" content="Kevin Mitermite" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mitermitek.fr/" />
        <meta
          property="og:title"
          content="Kevin Mitermite, développeur web full stack"
        />
        <meta
          property="og:description"
          content="Kevin Mitermite, développeur web junior full stack en alternance avec Michelin et ENI Ecole Informatique."
        />
        <meta property="og:image" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mitermitek.fr/" />
        <meta
          property="twitter:title"
          content="Kevin Mitermite, développeur web full stack"
        />
        <meta
          property="twitter:description"
          content="Kevin Mitermite, développeur web junior full stack en alternance avec Michelin et ENI Ecole Informatique."
        />
        <meta property="twitter:image" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kevin Mitermite, développeur web full stack : {title}</title>
      </Head>
      <div className="flex flex-col justify-start items-start max-w-2xl mx-auto px-3">
        <div className="py-16 w-full">{children}</div>
        <Footer />
      </div>
    </>
  );
}
