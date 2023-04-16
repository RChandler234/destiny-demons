import { Typography } from "@mui/material";
import deepstone from "../assets/deepstone.jpg";

const Crypt = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={deepstone}
        alt="Root Header"
        height={"300px"}
        width={"100%"}
        style={{ objectFit: "cover" }}
      />
      <Typography>Deep Stone Crypt</Typography>
    </div>
  );
};

export default Crypt;
