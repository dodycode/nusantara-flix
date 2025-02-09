import Image from "next/image";

import { Icon } from "@/components/ui/icons";

const MovieCard: React.FC = () => {
  return (
    <div className="mt-8">
      <a href="/movies/1">
        <Image
          src="https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg"
          alt="Movie Poster"
          className="thumbnail transition duration-150 ease-in-out hover:opacity-75"
          width={400}
          height={300}
          priority
        />
      </a>
      <div className="mt-2">
        <a href="/movies/1" className="mt-2 text-lg hover:text-gray-300">
          The Astronot
        </a>
        <div className="mt-1 flex items-center text-sm text-gray-400">
          <Icon type="star" />
          <span className="ml-1">6.5</span>
          <span className="mx-2">|</span>
          <span>2010</span>
        </div>
        <div className="text-sm text-gray-400">Action</div>
      </div>
    </div>
  );
};

export { MovieCard };
