import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";

const TVInfo: React.FC = () => {
  return (
    <div className="tv-info border-b border-gray-800">
      <div className="container mx-auto flex flex-col px-4 py-16 md:flex-row">
        <div className="flex-none">
          <div className="relative h-[400px] w-64 lg:h-[calc(100dvh-200px)] lg:w-96">
            <Image
              src="https://image.tmdb.org/t/p/w300/hP9bsI2B7HONwDrzoNw5Q3QJMqU.jpg"
              alt="TV Show Poster"
              className="thumbnail object-cover transition duration-150 ease-in-out hover:opacity-75"
              fill
              priority
            />
          </div>
        </div>
        <div className="md:ml-24">
          <h2 className="mt-4 text-4xl font-semibold md:mt-0">The carrier</h2>
          <div className="flex flex-wrap items-center text-sm text-gray-400">
            <Icon type="star" />
            <span className="ml-1">5.4</span>
            <span className="mx-2">|</span>
            <span>2009</span>
            <span className="mx-2">|</span>
            <span>Drama</span>
          </div>

          <p className="mt-8 text-gray-300">
            The series follows the adventures of a group of people who are
            trying to find a way to save the world from the evil forces of the
            Carrier.
          </p>

          <div className="mt-12">
            <div className="mt-4 flex">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="mr-8">
                  <div>Cristopher Nolan</div>
                  <div className="text-sm text-gray-400">Creator</div>
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

export { TVInfo };
