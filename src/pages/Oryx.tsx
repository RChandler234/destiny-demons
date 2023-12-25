import kingsFall from "../assets/kingsFall.jpg";
import { RaidView } from "../components/RaidView";
import { RaidType } from "../utils/raidIds";

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
      <RaidView raid={RaidType.KING} />
    </div>
  );
};

export default Oryx;
