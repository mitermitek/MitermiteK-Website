import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="navbar flex flex-row justify-start items-center py-5 font-semibold w-full">
      <Link href="/">
        <a
          className={
            router.pathname == "/"
              ? "text-white"
              : "text-gray-500 hover:text-white transition-all"
          }
        >
          Accueil
        </a>
      </Link>
      <Link href="/uses">
        <a
          className={
            router.pathname == "/uses"
              ? "text-white"
              : "text-gray-500 hover:text-white transition-all"
          }
        >
          Usages
        </a>
      </Link>
    </nav>
  );
}
