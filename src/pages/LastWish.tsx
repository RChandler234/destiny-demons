import lastWish from "../assets/lastwish.jpg";
import { RaidView } from "../components/RaidView";
import { RaidType } from "../utils/raidIds";

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
      <RaidView raid={RaidType.WISH} />
    </div>
  );
};

export default LastWish;
