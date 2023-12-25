import { RaidType, getRaidName } from "../utils/raidIds";
import { Box, Typography } from "@mui/material";
import { useAllPlayersRaidData } from "../hooks/activitydata.hooks";
import { PLAYERS } from "../utils/players";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ghostLoading from "../assets/ghostLoading.gif";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 2,
    cellClassName: "username",
  },
  {
    field: "clears",
    headerName: "Clears",
    flex: 1,
    cellClassName: "clears",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "attempts",
    headerName: "Attempts",
    flex: 1,
  },
  {
    field: "kills",
    headerName: "Kills",
    flex: 1,
  },
  {
    field: "deaths",
    headerName: "Deaths",
    flex: 1,
  },
  {
    field: "assists",
    headerName: "Assists",
    flex: 1,
  },
  {
    field: "fastest",
    headerName: "Fastest Clear",
    flex: 1,
  },
];

export const RaidView = ({ raid }: { raid: RaidType }) => {
  const { isError, isLoading, data, error } = useAllPlayersRaidData(raid);

  if (isLoading)
    return (
      <Typography>
        <img
          src={ghostLoading}
          alt="Ghost Loading"
          height={"300px"}
          width={"300px"}
        />
      </Typography>
    );

  if (isError) return <Typography>{error?.message}</Typography>;

  const rows = data.map((playerData: any, idx: number) => {
    const completeRaids: any[] = playerData.filter(
      (raid: any) => raid.values.completed.basic.value === 1
    );
    return {
      id: idx,
      name: PLAYERS[idx].name,
      fastest: completeRaids
        .filter((raid) => raid.startedFromBeginning === true)
        .reduce(
          (clear: any, data: any) =>
            data.values.timePlayedSeconds.basic.value < clear.value
              ? data.values.timePlayedSeconds.basic
              : clear,
          { displayValue: "", value: 10000000000000 }
        ).displayValue,
      clears: completeRaids.length,
      attempts: playerData.length,
      kills: playerData.reduce(
        (kills: any, data: any) => kills + data.values.kills.basic.value,
        0
      ),
      deaths: playerData.reduce(
        (deaths: any, data: any) => deaths + data.values.deaths.basic.value,
        0
      ),
      assists: playerData.reduce(
        (assists: any, data: any) => assists + data.values.assists.basic.value,
        0
      ),
    };
  });
  return (
    <Box>
      <Typography sx={{ my: 2 }} variant="h5">
        {getRaidName(raid)}
      </Typography>
      <DataGrid
        sx={{
          fontSize: "20px",
          "& .username": {
            fontSize: "20px",
          },
          "& .clears": {
            fontSize: "20px",
          },
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
          ".MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "&.MuiDataGrid-root": {
            border: "none",
          },
          ".MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
          ".MuiDataGrid-columnHeaders": {
            borderBottom: "1px solid #000000",
            borderTop: "1px solid #000000",
            fontSize: "20px",
          },
          ".MuiDataGrid-columnHeader:focus-within": {
            outline: "none",
          },
          ".MuiDataGrid-footerContainer": {
            borderTop: "none",
          },
        }}
        columns={columns}
        rows={rows}
        autoHeight
        hideFooterPagination
        hideFooterSelectedRowCount
      />
    </Box>
  );
};
