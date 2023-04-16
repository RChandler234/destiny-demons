import { Typography } from "@mui/material";
import lastWish from "../assets/lastwish.jpg";

const LastWish = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={lastWish}
        alt="Root Header"
        height={"300px"}
        width={"100%"}
        style={{ objectFit: "cover" }}
      />
      <Typography>Last Wish</Typography>;
    </div>
  );
};

export default LastWish;
