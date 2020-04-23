import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Switch from "@material-ui/core/Switch";
import useNavbarStyles from "../styles/NavbarStyles";
import { AppearanceContext } from "../providers/AppearanceProvider";

const Navbar = () => {
  const classes = useNavbarStyles();
  const { isDarkMode, toggleAppearance } = useContext(AppearanceContext);
  return (
    <div className={classes.root}>
      <AppBar color={isDarkMode ? "default" : "primary"} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Material Hooks
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Switch
            checked={isDarkMode}
            onChange={() => toggleAppearance()}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
