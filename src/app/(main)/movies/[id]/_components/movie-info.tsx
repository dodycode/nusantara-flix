import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";

const MovieInfo: React.FC = () => {
  return (
    <div className="movie-info border-b border-gray-800">
      <div className="container mx-auto flex flex-col px-4 py-16 md:flex-row">
        <div className="flex-none">
          <div className="relative h-[400px] w-64 lg:h-[calc(100dvh-200px)] lg:w-96">
            <Image
              src="https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg"
              alt="Movie Poster"
              className="thumbnail object-cover transition duration-150 ease-in-out hover:opacity-75"
              fill
              priority
            />
          </div>
        </div>
        <div className="md:ml-24">
          <h2 className="mt-4 mb-2 text-4xl font-semibold md:mt-0">
            The Astronot
          </h2>
          <div className="flex flex-wrap items-center text-sm text-gray-400">
            <Icon type="star" />
            <span className="ml-1">5.4</span>
            <span className="mx-2">|</span>
            <span>2010</span>
            <span className="mx-2">|</span>
            <span>Action</span>
          </div>

          <p className="mt-8 text-gray-300">
            The first movie in the series, The Astronot is a thrilling action
            adventure that follows the exploits of a young man named Akbar, who
            is on a mission to find his missing father, a legendary pirate known
            as the Black Pearl.
          </p>

          <div className="mt-12">
            <h4 className="font-semibold text-white">Featured Crew</h4>
            <div className="mt-4 flex">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="mr-8">
                  <div>Mr. Akbar</div>
                  <div className="text-sm text-gray-400">Cameraman</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Button LeftIcon="play" size="lg">
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieInfo };
