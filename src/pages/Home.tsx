import traveler from "../assets/traveler.png";

const Home = () => {
  return (
    <img
      src={traveler}
      alt="traveler"
      height={"100%"}
      width={"100%"}
      style={{ objectFit: "contain" }}
    />
  );
};

export default Home;
