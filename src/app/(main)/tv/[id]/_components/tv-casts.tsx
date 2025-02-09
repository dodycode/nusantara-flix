import Image from "next/image";
import Link from "next/link";

const TVCasts: React.FC = () => {
  return (
    <div className="tv-cast border-b border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold">Cast</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="mt-8">
              <Link href="/people/1">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="https://image.tmdb.org/t/p/w185/yyzmRqjwwU05ROhxJ1VBQox4yIX.jpg"
                    alt="Actor"
                    className="person-photo object-cover transition duration-150 ease-in-out hover:opacity-75"
                    fill
                  />
                </div>
              </Link>
              <div className="mt-2">
                <Link
                  href="/people/1"
                  className="hover:text-gray:300 mt-2 text-lg"
                >
                  Sarah
                </Link>
                <div className="text-sm text-gray-400">Actor</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { TVCasts };
