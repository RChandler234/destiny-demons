import opening from "../assets/vowOpening.png";
import "../App.css";
import { RaidType } from "../utils/raidIds";
import { RaidView } from "../components/RaidView";

const Vow = () => {
  return (
    <div style={{ textAlign: "center", height: "100%" }}>
      <img
        src={opening}
        alt="header"
        height={"300px"}
        width={"100%"}
        style={{ objectFit: "cover" }}
      />
      <RaidView raid={RaidType.VOW} />
    </div>
  );
};

export default Vow;
