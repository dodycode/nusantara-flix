import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/icons";

const TVShowCard: React.FC = () => {
  return (
    <div className="mt-8">
      <Link href="/tv/1">
        <Image
          src="https://image.tmdb.org/t/p/w300/hP9bsI2B7HONwDrzoNw5Q3QJMqU.jpg"
          alt="TV Show Poster"
          className="thumbnail transition duration-150 ease-in-out hover:opacity-75"
          width={400}
          height={300}
          priority
        />
      </Link>
      <div className="mt-2">
        <a href="/tv/1" className="mt-2 text-lg hover:text-gray-300">
          The Caribean
        </a>
        <div className="mt-1 flex items-center text-sm text-gray-400">
          <Icon type="star" />
          <span className="ml-1">4.5</span>
          <span className="mx-2">|</span>
          <span>2009</span>
        </div>
        <div className="text-sm text-gray-400">Drama</div>
      </div>
    </div>
  );
};

export { TVShowCard };
