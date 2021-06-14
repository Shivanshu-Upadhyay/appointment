import React, { useState } from "react";
import clsx from "clsx";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Tooltip, Button } from "@material-ui/core";
import TodayIcon from "@material-ui/icons/Today";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { Link } from "react-router-dom";

// import related to redux
import { openSideBar, openTopDrawer } from "../actions/sideBarAction";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import { logout } from "../actions/userAction";

// styling of the components
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    //necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  hide: {
    display: "none",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 75,
  },
}));

//Starting of NavBar Component
function NavBar(props) {
  const initialState = {
    mouseX: null,
    mouseY: null,
  };
  const [cordinate, setCordinate] = useState(initialState);
  const [mailCounter, setMailCounter] = useState(0);
  const handleClickMail = () => {
    setMailCounter(mailCounter + 1);
  };
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isAddMenuOpen = Boolean(anchorE2);

  const handleProfileMenuOpen = (event) => {
    // console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const addMenuId = "add-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  );

  const handleAddMenuClose = () => {
    setAnchorE2(null);
  };

  const renderRightClickMenu = () => {
    return (
      <Menu
        keepMounted
        anchorEl={anchorE2}
        id={addMenuId}
        open={isAddMenuOpen}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={handleAddMenuClose}
      >
        <MenuItem component={Link} to="/add-patient">
          Add Patient
        </MenuItem>
        <MenuItem component={Link} to="/add-appointment">
          Add Apointment
        </MenuItem>
        <MenuItem>Add Income</MenuItem>
        <MenuItem>Add Expenses</MenuItem>
      </Menu>
    );
  };
  const handleClick = (event) => {
    setAnchorE2(event.currentTarget);
  };

  return (
    <div>
      <div style={{ cursor: "context-menu" }}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: props.isOpen,
          })}
        >
          <Toolbar>
            <IconButton
              onClick={() => {
                props.openSideBar();
              }}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: props.isOpen,
              })}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />

            <div className={classes.sectionDesktop}>
              <Link to="/exercise">
                <Button>Exercise</Button>
              </Link>
              <Link to="/billing">
                <Button>Billing</Button>
              </Link>
              <Link to="/test">
                <Button>Test</Button>
              </Link>
              <Link to="/assessment">
                <Button>Assessment</Button>
              </Link>

              {props.user.isLogedIn && (
                <Typography>{props.user.user.name}</Typography>
              )}

              <IconButton onClick={handleClick} color="inherit">
                <Tooltip title="Add Data" aria-label="todays appointments">
                  <GroupAddIcon  color="inherit" />
                </Tooltip>
              </IconButton>

              <IconButton
                onClick={() => {
                  props.setPopup(true);
                }}
                color="inherit"
              >
                <AccountBalanceWalletIcon color="inherit" />
              </IconButton>

              <IconButton
                aria-label="todays task"
                color="inherit"
                onClick={props.openTopDrawer}
              >
                <Tooltip
                  title="Todays appointments"
                  aria-label="todays appointments"
                >
                  <TodayIcon />
                </Tooltip>
              </IconButton>

              <IconButton
                aria-label="show 4 new mails"
                color="inherit"
                onClick={handleClickMail}
              >
                <Badge badgeContent={mailCounter} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      {renderMenu}
      <div>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: !props.isOpen,
          })}
        >
          <div className={clsx(classes.toolbar)} />
          {renderRightClickMenu()}
        </main>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { isOpen: state.sideBarState, user: state.auth };
};

export default connect(mapStateToProps, { openSideBar, openTopDrawer })(NavBar);
