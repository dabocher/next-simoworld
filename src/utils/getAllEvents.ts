import { Events } from "@/app/api/types";

const getAllEvents = async () => {
  const response = await fetch(`http://localhost:3000/api/events`, {
    cache: "no-cache",
  });
  const data = (await response.json()) as Events;
  return data;
};

export default getAllEvents;
