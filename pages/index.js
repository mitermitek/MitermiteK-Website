import Layout from "../components/layout";
import Image from "next/image";
import mitermitek from "../public/images/mitermitek.png";
import laravel from "../public/images/laravel.png";
import nextjs from "../public/images/nextjs.png";
import chrome from "../public/images/chrome.png";
import spotify from "../public/images/Spotify_Icon_RGB_Green.png";
import phpstorm from "../public/images/phpstorm.png";
import vscode from "../public/images/vscode.png";
import insomnia from "../public/images/insomnia.png";
import gdesktop from "../public/images/gdesktop.jpg";

export default function Home() {
  return (
    <Layout title="Accueil">
      <div className="flex flex-col-reverse justify-center items-start sm:flex-row">
        <div className="flex flex-col pr-0 sm:pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 mt-5 sm:mt-0">
            Kevin Mitermite
          </h1>
          <p className="mb-4 text-justify">
            Développeur web junior full stack en alternance avec{" "}
            <a
              href="https://www.michelin.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-all"
            >
              <b>Michelin</b>
            </a>{" "}
            et{" "}
            <a
              href="https://www.eni-ecole.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-all"
            >
              <b>ENI Ecole Informatique</b>
            </a>
            .
          </p>
          <p className="sm:text-justify">
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
        <ul>
          <li>
            Site web{" "}
            <a
              href="https://philippelachant.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-gray-500 transition-all"
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
              className="font-semibold hover:text-gray-500 transition-all"
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
              className="font-semibold hover:text-gray-500 transition-all"
            >
              Marie Desmetz
            </a>
            , une psychologue libérale.
          </li>
        </ul>
      </div>
      <div className="mt-16">
        <h2 className="font-bold text-xl md:text-3xl tracking-tight mb-10">
          Usages
        </h2>
        <ul className="mb-10">
          <li className="flex flex-row justify-start items-center mb-2">
            <Image
              alt="Next.js"
              src={nextjs}
              className="rounded-full"
              width="24"
              height="24"
            />
            <span className="ml-3">
              Next.js<span className="text-gray-500">, un framework React</span>
            </span>
          </li>
          <li className="flex flex-row justify-start items-center mb-2">
            <Image
              alt="Laravel"
              src={laravel}
              className="rounded-full"
              width="24"
              height="24"
            />
            <span className="ml-3">
              Laravel<span className="text-gray-500">, un framework PHP</span>
            </span>
          </li>
        </ul>
        <ul className="mb-10">
          <li className="flex flex-row justify-start items-center mb-2">
            <Image
              alt="Google Chrome"
              src={chrome}
              className="rounded-full"
              width="24"
              height="24"
            />
            <span className="ml-3">
              Google Chrome
              <span className="text-gray-500">, mon navigateur par défaut</span>
            </span>
          </li>
          <li className="flex flex-row justify-start items-center mb-2">
            <Image
              alt="Spotify"
              src={spotify}
              className="rounded-full"
              width="24"
              height="24"
            />
            <span className="ml-3">
              Spotify
              <span className="text-gray-500">
                , indispensable pour moi pour écouter de la musique
              </span>
            </span>
          </li>
        </ul>
        <ul>
          <li className="flex flex-row justify-start items-center mb-2">
            <Image
              alt="VS Code"
              src={vscode}
              className="rounded-full"
              width="24"
              height="24"
            />
            <span className="ml-3">
              Visual Studio Code
              <span className="text-gray-500">
                , mon éditeur de code principal (avec des extensions)
              </span>
            </span>
          </li>
          <li className="flex flex-row justify-start items-center mb-2">
            <Image
              alt="PhpStorm"
              src={phpstorm}
              className="rounded-full"
              width="24"
              height="24"
            />
            <span className="ml-3">
              PhpStorm
              <span className="text-gray-500">
                , l'IDE pour mes projets en Laravel
              </span>
            </span>
          </li>
          <li className="flex flex-row justify-start items-center mb-2">
            <Image
              alt="Insomnia"
              src={insomnia}
              className="rounded-full"
              width="24"
              height="24"
            />
            <span className="ml-3">
              Insomnia
              <span className="text-gray-500">
                , afin de tester mes requêtes API
              </span>
            </span>
          </li>
          <li className="flex flex-row justify-start items-center">
            <Image
              alt="Github Desktop"
              src={gdesktop}
              className="rounded-full"
              width="24"
              height="24"
            />
            <span className="ml-3">
              Github Desktop
              <span className="text-gray-500">
                , qui me permet de pousser mon code sur Github
              </span>
            </span>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
