import opening from "../assets/vowOpening.png";
import "../App.css";
import { Typography } from "@mui/material";

const Vow = () => {
  return (
    <div className="App">
      <img
        src={opening}
        alt="header"
        height={"300px"}
        width={"100%"}
        style={{ objectFit: "cover" }}
      />
      <Typography>Vow of the Disciple</Typography>
    </div>
  );
};

export default Vow;
