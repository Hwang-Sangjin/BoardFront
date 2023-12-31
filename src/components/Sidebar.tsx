/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import LinearProgress from "@mui/joy/LinearProgress";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import ColorSchemeToggle from "./ColorScheme.Toggle";
import { closeSidebar } from "../Chat/utils";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import userDataState from "../states/userDataState";

export default function Sidebar() {
  const [userData, setUserData] = useRecoilState(userDataState);

  const navigate = useNavigate();
  const RouteToMessages = () => {
    navigate("/chat");
  };

  const RouteToHome = () => {
    navigate("/main");
  };

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: {
          xs: "fixed",
          lg: "sticky",
        },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          lg: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        px: 1.5,
        py: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "224px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "256px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",

          opacity: "calc(var(--SideNavigation-slideIn, 0) - 0.2)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Typography fontWeight="xl">MUI</Typography>
        <ColorSchemeToggle sx={{ ml: "auto" }} />
      </Box>
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <List
          sx={{
            "--ListItem-radius": "8px",
            "--List-gap": "4px",
            "--List-nestedInsetStart": "40px",
          }}
        >
          <ListItem>
            <ListItemButton onClick={RouteToHome}>
              <ListItemDecorator>
                <i data-feather="home" />
              </ListItemDecorator>
              <ListItemContent>Home</ListItemContent>
              <i data-feather="chevron-down" />
            </ListItemButton>
          </ListItem>

          <ListItem nested>
            <ListItemButton onClick={RouteToMessages}>
              <ListItemDecorator>
                <i data-feather="message-square" />
              </ListItemDecorator>
              <ListItemContent>Messages</ListItemContent>
              <i data-feather="chevron-down" />
            </ListItemButton>
            <List>
              {/* <ListItem>
                <ListItemButton selected color="primary">
                  View all
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Your team</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Archived</ListItemButton>
              </ListItem> */}
            </List>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography fontSize="sm" fontWeight="lg">
            {userData.username}
          </Typography>
          <Typography level="body-xs">{userData.email}</Typography>
        </Box>
        <IconButton variant="plain" color="neutral">
          <i data-feather="log-out" />
        </IconButton>
      </Box>
    </Sheet>
  );
}
