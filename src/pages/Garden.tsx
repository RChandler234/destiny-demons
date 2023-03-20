import { Typography } from "@mui/material";
import gardenOpening from "../assets/gardenOpening.jpg";

const Garden = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={gardenOpening}
        alt="Root Header"
        height={"300px"}
        width={"100%"}
        style={{ objectFit: "cover" }}
      />
      <Typography>Garden of Salvation</Typography>{" "}
    </div>
  );
};

export default Garden;
