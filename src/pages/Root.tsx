import { Typography } from "@mui/material";
import rootOpening from "../assets/rootOpening.jpg";

const Root = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={rootOpening}
        alt="Root Header"
        height={"300px"}
        width={"100%"}
        style={{ objectFit: "cover" }}
      />
      <Typography>Root of Nightmares</Typography>{" "}
    </div>
  );
};

export default Root;
