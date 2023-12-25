import vog from "../assets/vaultOfGlass.jpg";
import { RaidView } from "../components/RaidView";
import { RaidType } from "../utils/raidIds";

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
      <RaidView raid={RaidType.VOG} />
    </div>
  );
};

export default Vog;
