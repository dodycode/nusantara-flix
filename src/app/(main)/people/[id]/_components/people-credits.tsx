const PeopleCredits: React.FC = () => {
  return (
    <div className="credits border-b border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold">Credits</h2>
        <ul className="mt-8 list-disc pl-5 leading-loose">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>
              2010{" "}
              <strong>
                <a href="#" className="hover:underline">
                  Dheani
                </a>
              </strong>{" "}
              as <strong>Lead Developer</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { PeopleCredits };
