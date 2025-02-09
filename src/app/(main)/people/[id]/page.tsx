import { PeopleCredits } from "./_components/people-credits";
import { PeopleInfo } from "./_components/people-info";

export default function PersonDetails() {
  return (
    <div className="flex flex-col">
      <PeopleInfo />
      <PeopleCredits />
    </div>
  );
}
