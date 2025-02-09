import Image from "next/image";

import { Icon } from "@/components/ui/icons";

const PeopleInfo: React.FC = () => {
  return (
    <div className="movie-info border-b border-gray-800">
      <div className="container mx-auto flex flex-col px-4 py-16 md:flex-row">
        <div className="flex-none">
          <div className="relative h-[500px] w-76">
            <Image
              src="https://image.tmdb.org/t/p/w500/yyzmRqjwwU05ROhxJ1VBQox4yIX.jpg"
              alt="Actors"
              className="person-photo object-cover transition duration-150 ease-in-out hover:opacity-75"
              fill
            />
          </div>
          <ul className="mt-4 flex items-center">
            <li>
              <a href="#" title="Facebook" target="_blank">
                <Icon type="facebook" />
              </a>
            </li>

            <li className="ml-6">
              <a href="#" title="Instagram" target="_blank">
                <Icon type="instagram" />
              </a>
            </li>

            <li className="ml-6">
              <a href="#" title="Twitter" target="_blank">
                <Icon type="twitter" />
              </a>
            </li>

            <li className="ml-6">
              <a href="#" title="Website" target="_blank">
                <Icon type="website" />
              </a>
            </li>
          </ul>
        </div>
        <div className="md:ml-24">
          <h2 className="mt-4 text-4xl font-semibold md:mt-0">Sarah Connor</h2>
          <div className="flex flex-wrap items-center text-sm text-gray-400">
            <svg
              className="w-4 fill-current text-gray-400 hover:text-white"
              viewBox="0 0 448 512"
            >
              <path d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z" />
            </svg>
            <span className="ml-2">1987 (35 years old) in New York</span>
          </div>

          <p className="mt-8 text-gray-300">
            Sarah is a software engineer at Google. She works on the TensorFlow
            team, where she is the lead on the TensorFlow Lite project. She
            previously worked on the TensorFlow team, where she was a member of
            the machine learning team. She has a B.S. in Computer Science from
            the University of Waterloo.
          </p>

          <h4 className="mt-12 font-semibold">Known For</h4>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="mt-4">
                <a href="#">
                  <div className="relative h-[240px] w-full">
                    <Image
                      src="https://image.tmdb.org/t/p/w200/hP9bsI2B7HONwDrzoNw5Q3QJMqU.jpg"
                      alt="TV Show Poster"
                      className="thumbnail object-cover transition duration-150 ease-in-out hover:opacity-75"
                      fill
                    />
                  </div>
                </a>
                <a
                  href="#"
                  className="mt-1 block text-sm leading-normal text-gray-400 hover:text-white"
                >
                  The Galaxy
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { PeopleInfo };
