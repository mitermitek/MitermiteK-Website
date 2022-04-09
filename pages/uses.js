import Image from "next/image";
import Layout from "../components/layout";
import laravel from "../public/images/laravel.png";
import nextjs from "../public/images/nextjs.png";
import chrome from "../public/images/chrome.png";
import spotify from "../public/images/Spotify_Icon_RGB_Green.png";
import phpstorm from "../public/images/phpstorm.png";
import vscode from "../public/images/vscode.png";
import insomnia from "../public/images/insomnia.png";
import gdesktop from "../public/images/gdesktop.jpg";

export default function Uses() {
  return (
    <Layout title="Usages">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-16 text-center">
        Usages
      </h1>
      <p className="text-justify mb-10">
        J&apos;ai utilisé beaucoup de langages différents durant plusieurs
        années, que ce soit à l&apos;école et chez moi.
      </p>
      <p className="text-justify mb-10">
        Pendant mon alternance chez Michelin, j&apos;ai dû me concentrer sur une
        seule technologie. Ce qui n&apos;est pas plus mal car sinon je
        n&apos;aurais pas une spécialisation dans un langage/framework, en plus
        d'avoir des connaissances sur d'autres.
      </p>
      <p className="text-justify mb-10">
        J&apos;ai donc décidé de me concentrer sur deux frameworks pour réaliser
        mes applications web :
      </p>
      <ul className="mb-10">
        <li className="flex flex-row justify-start items-center mb-2">
          <Image
            alt="Next.js"
            src={nextjs}
            className="rounded-full"
            width="24"
            height="24"
          />
          <span className="ml-3">Next.js, un framework React</span>
        </li>
        <li className="flex flex-row justify-start items-center mb-2">
          <Image
            alt="Laravel"
            src={laravel}
            className="rounded-full"
            width="24"
            height="24"
          />
          <span className="ml-3">Laravel, un framework PHP</span>
        </li>
      </ul>
      <p className="text-justify mb-10">
        Et donc je travaille sur un MacBook Air de 2020, avec la puce M1
        d&apos;Apple (qui est incroyable d&apos;ailleurs !).
      </p>
      <p className="text-justify mb-10">
        Je vais vous lister, ci-dessous, les logiciels que j&apos;utilise sur
        mon MacBook. Je vais faire ça par catégories.
      </p>
      <p className="mb-10">Pour tout ce qui est utilitaire au quotidien :</p>
      <ul className="mb-10">
        <li className="flex flex-row justify-start items-center mb-2">
          <Image
            alt="Google Chrome"
            src={chrome}
            className="rounded-full"
            width="24"
            height="24"
          />
          <span className="ml-3">Google Chrome, mon navigateur par défaut</span>
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
            Spotify, indispensable pour moi pour écouter de la musique
          </span>
        </li>
      </ul>
      <p className="mb-10">Et maintenant, mes outils pour le développement :</p>
      <ul className="mb-10">
        <li className="flex flex-row justify-start items-center mb-2">
          <Image
            alt="VS Code"
            src={vscode}
            className="rounded-full"
            width="24"
            height="24"
          />
          <span className="ml-3">
            Visual Studio Code, mon éditeur de code principal (avec des
            extensions)
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
            PhpStorm, l'IDE pour mes projets en Laravel
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
            Insomnia, afin de tester mes requêtes API
          </span>
        </li>
        <li className="flex flex-row justify-start items-center mb-2">
          <Image
            alt="Github Desktop"
            src={gdesktop}
            className="rounded-full"
            width="24"
            height="24"
          />
          <span className="ml-3">
            Github Desktop, qui me permet de pousser mon code sur Github
          </span>
        </li>
      </ul>
    </Layout>
  );
}
