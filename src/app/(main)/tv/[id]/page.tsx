import { TVCasts } from "./_components/tv-casts";
import { TVImages } from "./_components/tv-images";
import { TVInfo } from "./_components/tv-info";

export default function TVShowDetails() {
  return (
    <div className="flex flex-col">
      <TVInfo />
      <TVCasts />
      <TVImages />
    </div>
  );
}
