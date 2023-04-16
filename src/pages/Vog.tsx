import { Typography } from "@mui/material";
import vog from "../assets/vaultOfGlass.jpg";

const Vog = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={vog}
        alt="Root Header"
        height={"300px"}
        width={"100%"}
        style={{ objectFit: "cover" }}
      />
      <Typography>Vault of Glass</Typography>
    </div>
  );
};

export default Vog;
