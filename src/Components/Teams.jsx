import { useState } from "react";
import teamData from "../data/teamData";
import Team from "./Team";
export default function Teams() {
  const [team, setTeam] = useState(teamData);
  return (
    <>
      <div className="flex justify-around items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 min-w-[75%]">
          {team.map((a) => {
            return <Team key={a.id} team={a} />;
          })}
        </div>
      </div>
    </>
  );
}
