import Image from "next/image";

const TVImages: React.FC = () => {
  return (
    <div className="tv-images">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold">Images</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="mt-8">
              <a href="#">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="https://placehold.co/500x500.png"
                    alt="TV Show Images"
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

export { TVImages };
