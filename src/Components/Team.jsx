import React from "react";
import { Link } from "react-router-dom";
export default function Team({ team }) {
  return (
    <div className=" flex flex-col justify-center items-center min-h-72">
      <div>
        <img
          className="h-48 rounded-full border-[10px] border-blue-300"
          src={team.img}
          alt=""
        />
      </div>
      <div className="font-semibold">{team.name}</div>
      <div className="text-xs font-semibold">{team.role}</div>
      <div className="flex gap-4">
        <Link to={team.ln}>LN</Link>
        <Link to={team.em}>EM</Link>
      </div>
    </div>
  );
}
