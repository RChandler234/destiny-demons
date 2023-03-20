import logo from "../logo.svg";
import opening from "../assets/vowOpening.png";
import "../App.css";

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
      <p>Reid Report</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};

export default Vow;
