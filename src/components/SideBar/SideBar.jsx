import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import leftDrawerImg from "../../assets/sidebar.jpg";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Collapse from "@material-ui/core/Collapse";
import { Link } from "react-router-dom";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { v4 as uuidv4 } from "uuid";

import { connect } from "react-redux";

import {
  closeSideBar,
  closeDropDown,
  openDropDown,
} from "../../actions/sideBarAction";

let drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  paper: {
    // backgroundImage: `url(${leftDrawerImg})`,
    backgroundColor: "#333",
    backgroundRepeat: "false",
    backgroundSize: "cover",
    backdropFilter: "blur(20px)",
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  rootList: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "rgb(51,51,51)",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    backgroundColor: "tdarkturquoise",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

const SideBar = (props) => {
  drawerWidth = props.drawerWidth;
  const theme = useTheme();
  const classes = useStyles();
  const isDrawerOpen = props.isDrawerOpen;

  // const [open, setOpen] = React.useState(false);
  const [subIndex, setSubIndex] = React.useState(-1);

  const handleCloseSubList = () => {
    setSubIndex(-1);
    props.closeDropDown();
  };

  const handleOpenSubList = (i) => {
    if (props.isDropDownOpen) handleCloseSubList();
    setSubIndex(i);
    props.openDropDown();
  };
  const handleOnCLickChevron = () => {
    props.closeDropDown();
    props.closeSideBar();
  };

  const renderCard = () => {
    return <div></div>;
  };

  const renderSubList = (subHeadingArray) => {
    if (isDrawerOpen)
      return (
        <Collapse in={props.isDropDownOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subHeadingArray.map((subHeading, index) => (
              <ListItem
                key={uuidv4()}
                component={Link}
                alignItems="flex-start"
                button
                to={`/${subHeading.toLowerCase()}`}
                className={classes.nested}
              >
                <ListItemText primary={subHeading} />
              </ListItem>
            ))}
          </List>
          <Divider variant="middle" />
        </Collapse>
      );
  };

  const toggleSubMenu = (index) => {
    if (props.isDropDownOpen) handleCloseSubList();
    else handleOpenSubList(index);
  };

  const returnRoute = (heading, index) => {
    if (index === 0) return "/";
    return heading.toLowerCase().replaceAll(" ", "");
  };

  const renderList = () => {
    return (
      <div className={classes.root} role="presentation">
        <List className={classes.rootList}>
          {props.listContent.map((listObj, index) => (
            <div key={uuidv4()}>
              <ListItem
                component={Link}
                to={
                  listObj.sub.length > 0
                    ? undefined
                    : returnRoute(listObj.heading, index)
                }
                button
                onClick={() => {
                  toggleSubMenu(index);
                }}
              >
                <ListItemIcon>{props.listIcons[index]}</ListItemIcon>
                <ListItemText primary={listObj.heading} />

                {listObj.sub.length <= 0 ? undefined : props.isDropDownOpen &&
                  index === subIndex ? (
                  <ExpandLess
                    fontSize="large"
                    onClick={() => {
                      handleCloseSubList();
                    }}
                  />
                ) : (
                  <ExpandMore
                    fontSize="large"
                    onClick={() => {
                      handleOpenSubList(index);
                    }}
                  />
                )}
              </ListItem>
              {index !== subIndex
                ? undefined
                : renderSubList(props.listContent[subIndex].sub)}
            </div>
          ))}
        </List>
      </div>
    );
  };

  return (
    <div>
      <Drawer
        open={isDrawerOpen}
        anchor={props.anchor}
        variant={props.variant}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: isDrawerOpen,
          [classes.drawerClose]: !isDrawerOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: isDrawerOpen,
            [classes.drawerClose]: !isDrawerOpen,
            [classes.paper]: true,
          }),
        }}
      >
        <div
          className={classes.toolbar}
          style={{
            backgroundColor: "darkturquoise",

            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          <Typography
            align="left"
            noWrap
            variant="h4"
            display="initial"
            color="primary"
          >
            PhysiOmatic
          </Typography>
          <IconButton onClick={handleOnCLickChevron}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>

        {props.listContent ? renderList() : undefined}
        {props.cardData ? renderCard() : undefined}
      </Drawer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isDrawerOpen: state.sideBarState,
    isDropDownOpen: state.dropDownState,
  };
};

export default connect(mapStateToProps, {
  closeSideBar,
  closeDropDown,
  openDropDown,
})(SideBar);
