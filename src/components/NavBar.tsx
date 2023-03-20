import { AppBar, Box, Container, Toolbar } from "@mui/material";
import raidImage from "../assets/raidImage.png";
import ghost from "../assets/ghostMenu.png";
import { Link } from "react-router-dom";

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

const NavBar = () => {
  return (
    <AppBar position="static">
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
            <Link to="/LASTPISS" style={styles.link}>
              LAST WISH
            </Link>
            <Link to="/VAULTOFASS" style={styles.link}>
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
