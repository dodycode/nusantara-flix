import Image from "next/image";

const MovieImages: React.FC = () => {
  return (
    <div className="movie-images">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold">Images</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="mt-8">
              <a href="#">
                {/* <img src={`https://image.tmdb.org/t/p/w500${image.file_path}`} loading="lazy" alt={movie.name} className="hover:opacity-75 transition ease-in-out duration-150"> */}
                <div className="relative h-[300px] w-full">
                  <Image
                    src="https://placehold.co/500x500.png"
                    alt="Movie Poster"
                    fill
                    className="object-cover transition duration-150 ease-in-out hover:opacity-75"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { MovieImages };
