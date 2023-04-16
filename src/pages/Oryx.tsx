import { Typography } from "@mui/material";
import kingsFall from "../assets/kingsFall.jpg";

const Oryx = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={kingsFall}
        alt="Root Header"
        height={"300px"}
        width={"100%"}
        style={{ objectFit: "cover" }}
      />
      <Typography>King's Fall</Typography>
    </div>
  );
};

export default Oryx;
