import { AppBar, IconButton, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatIcon from "@mui/icons-material/Chat";
import React from "react";
import { useRouter } from "next/router";
import UserProvider from "../UserContext";
import AvatarButton from "./AvatarButton";
import SignInButton from "./SignInButton";
import AddIcon from "@mui/icons-material/Add";

function NavBar() {
  const router = useRouter();

  return (
    <AppBar
      sx={{ backgroundColor: "#2A265A", padding: "16px" }}
      position="static"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100vw",
        }}
      >
        <IconButton
          onClick={() => router.push("/listings")}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ marginLeft: "32px" }}
        >
          <HomeIcon sx={{ fontSize: "10vh" }} />
        </IconButton>

        <div style={{ display: "flex", gap: "32px", marginRight: "4rem" }}>
          <UserProvider fallback={<></>}>
            <IconButton
              onClick={() => router.push("/listing/new")}
              color="inherit"
              aria-label="menu"
            >
              <AddIcon sx={{ fontSize: "10vh" }} />
            </IconButton>
          </UserProvider>
          <UserProvider fallback={<></>}>
            <IconButton
              onClick={() => router.push("/chat")}
              color="inherit"
              aria-label="menu"
            >
              <ChatIcon sx={{ fontSize: "10vh" }} />
            </IconButton>
          </UserProvider>

          <UserProvider fallback={<></>}>
            <IconButton
              onClick={() => router.push("/favorites")}
              color="inherit"
              aria-label="menu"
            >
              <FavoriteBorderIcon sx={{ fontSize: "10vh" }} />
            </IconButton>
          </UserProvider>

          <UserProvider fallback={<SignInButton />}>
            <AvatarButton />
          </UserProvider>
        </div>
      </div>
    </AppBar>
  );
}

export default NavBar;
