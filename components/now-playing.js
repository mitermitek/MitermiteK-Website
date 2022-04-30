import Image from "next/image";
import useSWR from "swr";
import spotify from "../public/images/Spotify_Icon_RGB_Green.png";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function NowPlaying() {
  const { data, error } = useSWR("/api/now-playing", fetcher);

  return (
    <div className="flex flex-row-reverse justify-center items-center sm:flex-row space-x-0 sm:space-x-2 w-full">
      <div className="inline-flex flex-row justify-center items-center w-full max-w-full">
        <Image
          alt="Spotify"
          src={spotify}
          width="24"
          height="24"
          layout="fixed"
        />
        <p className="capsize text-gray-500 font-medium ml-2 truncate">
          {data?.title && data?.artist ? (
            <span>
              {data.title} - {data.artist}
            </span>
          ) : (
            <span>Ne joue pas</span>
          )}
        </p>
        <span className="capsize mx-2 text-gray-700 block"> – </span>
        <p className="capsize text-gray-700 max-w-max">Spotify</p>
      </div>
    </div>
  );
}
