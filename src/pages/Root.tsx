import rootOpening from "../assets/rootOpening.jpg";
import { RaidView } from "../components/RaidView";
import { RaidType } from "../utils/raidIds";

const Root = () => {
  return (
    <div style={{ textAlign: "center", height: "100%" }}>
      <img
        src={rootOpening}
        alt="Root Header"
        height={"300px"}
        width={"100%"}
        style={{ objectFit: "cover" }}
      />
      <RaidView raid={RaidType.RON} />
    </div>
  );
};

export default Root;
