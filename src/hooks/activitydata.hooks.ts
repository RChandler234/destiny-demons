/* eslint-disable react-hooks/rules-of-hooks */
import { useQueries, useQuery } from "react-query";
import { getCarnageReport, getRaidActivityInfo } from "../api/getActivityStats";
import { RaidType } from "../utils/raidIds";
import { PLAYERS, Player } from "../utils/players";

const getNextRaidActivityPage = async (
  page: number,
  activities: any[],
  player: Player,
  characterId: string
) => {
  const data: any[] = await getRaidActivityInfo(page, player, characterId).then(
    async ({ data }) => {
      if (Object.keys(data.Response).length > 0) {
        return await getNextRaidActivityPage(
          page + 1,
          activities.concat(data.Response.activities),
          player,
          characterId
        );
      } else {
        return activities;
      }
    }
  );
  return data;
};

export const usePlayerRaidData = (
  raidType: RaidType,
  player: Player,
  characterId: string
) => {
  return useQuery<any, Error>(
    ["activityData", player.memberShipId, raidType, characterId],
    async () => {
      const unfilteredData = await getNextRaidActivityPage(
        0,
        [],
        player,
        characterId
      );
      const data = unfilteredData.filter(
        (raid: any) => raid.activityDetails.referenceId === raidType
      );
      return data;
    }
  );
};

export const useAllPlayersRaidData = (raidType: RaidType) => {
  let raidData = [];
  let isError = false;
  let isLoading = false;
  let error;
  for (let i = 0; i < PLAYERS.length; i++) {
    raidData.push([]);
  }
  for (let i = 0; i < PLAYERS.length; i++) {
    for (var character of PLAYERS[i].characterIds) {
      const {
        isError: errorBool,
        isLoading: loading,
        data: playerData,
        error: e,
      } = usePlayerRaidData(raidType, PLAYERS[i], character);
      isError = isError || errorBool;
      isLoading = isLoading || loading;
      error = e;
      const carnageReports = useActivityCarnageReport(playerData);
      if (carnageReports) {
        for (let j = 0; j < carnageReports.length; j++) {
          isError = isError || carnageReports[j].isError;
          isLoading = isLoading || carnageReports[j].isLoading;
          if (carnageReports[j].data) {
            const pindex = playerData.findIndex(
              (data: any) =>
                data.activityDetails.instanceId ===
                carnageReports[j].data.activityDetails.instanceId
            );
            playerData[pindex] = {
              ...playerData[pindex],
              startedFromBeginning:
                carnageReports[j].data.activityWasStartedFromBeginning,
            };
          }
        }
      }
      raidData[i] = raidData[i].concat(playerData);
    }
  }
  const data = raidData;
  return { isLoading, isError, error, data };
};

export const useActivityCarnageReport = (raidData?: any[]) => {
  return useQueries(
    raidData
      ? raidData.map((data) => {
          return {
            queryKey: ["carnageReport", data.activityDetails.instanceId],
            queryFn: async () => {
              const newData = await getCarnageReport(
                Number(data.activityDetails.instanceId)
              );
              return newData.data.Response;
            },
          };
        })
      : [] // if users is undefined, an empty array will be returned
  );
};
