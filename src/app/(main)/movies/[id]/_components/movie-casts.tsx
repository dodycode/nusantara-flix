import Image from "next/image";
import Link from "next/link";

import type { Cast } from "@/server/api/routers/tmdb/types/cast";
import CldImage from "@/components/cld-image";

type Props = {
  casts: Cast[];
};

const MovieCasts: React.FC<Props> = ({ casts }) => {
  return (
    <div className="movie-cast border-b border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold">Cast</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {casts.map((cast) => {
            const profilePath = cast.profile_path
              ? `https://image.tmdb.org/t/p/w300${cast.profile_path}`
              : "https://placehold.co/300x450.png";

            return (
              <div key={cast.id} className="mt-8">
                <Link href={`people/${cast.id}`}>
                  <div className="relative h-[300px] w-full">
                    <CldImage
                      src={profilePath}
                      alt={`${cast.name}`}
                      className="person-photo object-cover transition duration-150 ease-in-out hover:opacity-75"
                      sizes="300px"
                      fill
                      showloading
                    />
                  </div>
                </Link>
                <div className="mt-2">
                  <Link
                    href={`people/${cast.id}`}
                    className="hover:text-gray:300 mt-2 text-lg"
                  >
                    {cast.name}
                  </Link>
                  <div className="text-sm text-gray-400">{cast.character}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { MovieCasts };
