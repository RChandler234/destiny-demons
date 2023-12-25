import { AppBar, Box, Container, Toolbar } from "@mui/material";
import raidImage from "../assets/raidImage.png";
import ghost from "../assets/ghostMenu.png";
import { Link, useLocation } from "react-router-dom";

const styles = {
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: "20px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
};

const navBackgroundColor = (url: string) => {
  switch (url) {
    case "/VOW":
      return "#510400";
    case "/RON":
      return "#F89880";
    case "/GARDEN":
      return "#013220";
    case "/LASTWISH":
      return "#301934";
    case "/VAULTOFGLASS":
      return "#5f6c81";
    case "/TANIKS":
      return "#601EF9";
    case "/TOTEMS":
      return "#095d55";
    default:
      return "#00008B";
  }
};

const NavBar = () => {
  const url = useLocation().pathname;

  return (
    <AppBar position="static" sx={{ backgroundColor: navBackgroundColor(url) }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={raidImage} alt="Raid" width="50" height="50" />
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "16px",
                marginLeft: "2px",
              }}
            >
              Destiny
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "line-through",
                color: "white",
                fontSize: "16px",
                marginLeft: "5px",
              }}
            >
              Raid
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "16px",
                marginLeft: "5px",
              }}
            >
              Reid Report
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              to="/VOW"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
                marginLeft: "20px",
              }}
            >
              VOW
            </Link>
            <Link to="/RON" style={styles.link}>
              ROOT
            </Link>
            <Link to="/GARDEN" style={styles.link}>
              GARDEN
            </Link>
            <Link to="/LASTWISH" style={styles.link}>
              LAST WISH
            </Link>
            <Link to="/VAULTOFGLASS" style={styles.link}>
              VAULT
            </Link>
            <Link to="/TANIKS" style={styles.link}>
              DEEP STONE
            </Link>
            <Link to="/TOTEMS" style={styles.link}>
              KINGS FALL
            </Link>
            <a
              href="https://www.youtube.com/watch?v=oiSWXNaBBlI&t=2s"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ghost}
                alt="Ghost Menu"
                width={40}
                height={40}
                style={{ marginLeft: "20px" }}
              />
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
