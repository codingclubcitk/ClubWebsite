import { useState } from "react";
import eventData from "../data/eventData";
import EventCard from "./EventCard";

export default function EventsCard() {
  const [eventDatas, setEventDatas] = useState(eventData);
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {eventDatas.map((a) => {
          return <EventCard key={a.id} data={a} />;
        })}
      </div>
    </div>
  );
}
