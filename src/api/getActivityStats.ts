import axios from "axios";
import { Player } from "../utils/players";

const config = {
  headers: {
    "X-API-Key": `${process.env.REACT_APP_BUNGIE_API}`,
  },
};

export const getRaidActivityInfo = (
  page: number,
  player: Player,
  characterId: string
) => {
  const url = `https://www.bungie.net/Platform/Destiny2/3/Account/${player.memberShipId}/Character/${characterId}/Stats/Activities/?count=250&mode=4&page=${page}`;
  return axios.get(url, config);
};

export const getCarnageReport = (activityId: number) => {
  const url = `https://www.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/${activityId}`;
  return axios.get(url, config);
};
