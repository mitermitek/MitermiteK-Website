import Layout from "../components/layout";
import Image from "next/image";
import mitermitek from "../public/images/mitermitek.png";

export default function Home() {
  return (
    <Layout title="Accueil">
      <div className="flex flex-col-reverse justify-center items-start sm:flex-row">
        <div className="flex flex-col pr-0 sm:pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 mt-5 sm:mt-0">
            Kevin Mitermite
          </h1>
          <p className="text-gray-200 mb-4 text-justify">
            Développeur web junior full stack en alternance avec{" "}
            <a
              href="https://www.michelin.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-all"
            >
              <b>Michelin</b>
            </a>{" "}
            et{" "}
            <a
              href="https://www.eni-ecole.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-all"
            >
              <b>ENI Ecole Informatique</b>
            </a>
            .
          </p>
          <p className="text-gray-400 sm:text-justify">
            Aujourd'hui, je conçois des applications web. Je peux faire du
            back-end ainsi que du front-end (bon pour le front c'est basique
            mais c'est déjà ça 🤓).
          </p>
        </div>
        <div className="relative">
          <Image
            alt="Kevin Mitermite"
            src={mitermitek}
            width="175"
            height="175"
            layout="fixed"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="mt-16">
        <h2 className="font-bold text-xl md:text-3xl tracking-tight mb-3">
          Mes projets perso
        </h2>
        <ul className="text-gray-400">
          <li>
            Site web{" "}
            <a
              href="https://philippelachant.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-gray-200 transition-all"
            >
              Philippe Lachant
            </a>
            , un sculpteur contemporain.
          </li>
          <li>
            Site web{" "}
            <a
              href="https://louisdelaunay.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-gray-200 transition-all"
            >
              Louis Delaunay
            </a>
            , un étudiant en communication.
          </li>
          <li>
            Site web{" "}
            <a
              href="https://psychologue-desmetz.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-gray-200 transition-all"
            >
              Marie Desmetz
            </a>
            , une psychologue libérale.
          </li>
        </ul>
      </div>
    </Layout>
  );
}
