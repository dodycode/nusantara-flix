import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="border border-t border-gray-800">
      <div className="container mx-auto px-4 py-6 text-sm">
        Made with ❤️ by{" "}
        <Link
          href="https://dodycode.com"
          target="_blank"
          className="hover:text-gray-300 hover:underline"
        >
          Dodycode
        </Link>{" "}
        — Powered by{" "}
        <Link
          href="https://create.t3.gg/"
          target="_blank"
          className="hover:text-gray-300 hover:underline"
        >
          T3 Stack App
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.themoviedb.org/documentation/api"
          target="_blank"
          className="hover:text-gray-300 hover:underline"
        >
          TMDb API
        </Link>
      </div>
    </footer>
  );
};

export { Footer };
