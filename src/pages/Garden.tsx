import gardenOpening from "../assets/gardenOpening.jpg";
import { RaidView } from "../components/RaidView";
import { RaidType } from "../utils/raidIds";

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
      <RaidView raid={RaidType.GARDEN} />
    </div>
  );
};

export default Garden;
