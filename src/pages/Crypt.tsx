import deepstone from "../assets/deepstone.jpg";
import { RaidView } from "../components/RaidView";
import { RaidType } from "../utils/raidIds";

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
      <RaidView raid={RaidType.DEEP} />
    </div>
  );
};

export default Crypt;
