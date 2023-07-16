import { Community } from "@/app/api/types";

const getAllCommunities = async () => {
  const response = await fetch(`http://localhost:3000/api/communities`, {
    cache: "no-cache",
  });
  const data = (await response.json()) as Community[];
  return data;
};

export default getAllCommunities;
