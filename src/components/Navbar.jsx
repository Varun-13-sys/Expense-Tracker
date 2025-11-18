import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function Navbar({ toggleTheme, mode }) {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: mode === "light" ? "#2a2a2a" : "#1b1b1b",
        mb: 2,
      }}
      elevation={4}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* LEFT: LOGO & TITLE */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src="/logo.png" alt="Logo" style={{ width: 32, height: 32 }} />
          <Typography variant="h6" fontWeight="bold">
            Expense Tracker
          </Typography>
        </Box>

        {/* RIGHT: BUTTONS + THEME TOGGLE */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            component={Link}
            to="/"
            sx={{ color: "white", fontWeight: "bold", mr: 2 }}
          >
            Dashboard
          </Button>

          <Button
            component={Link}
            to="/add"
            sx={{
              background: "#f4d03f",
              color: "black",
              fontWeight: "bold",
              mr: 2,
            }}
            variant="contained"
          >
            + Add Expense
          </Button>

          {/* 🌙 / ☀️ Toggle Button */}
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
