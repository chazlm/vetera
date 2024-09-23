"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  Button,
  Modal,
  Fade,
  Backdrop,
  Slide,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const ModalBox = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
  borderTopLeftRadius: "16px",
  borderTopRightRadius: "16px",
  transition: "transform 0.5s ease", // Slide transition
}));

const Navbar = ({ onPageSelect }) => {
  const [open, setOpen] = useState(false);

  const handlePageChange = (page) => {
    setOpen(false);
    onPageSelect(page);
  };

  return (
    <AppBar color="transparent" position="static" sx={{ paddingTop: "2rem" }}>
      <Toolbar>
        {/* Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          vetera
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: "flex", md: "flex" } }}>
          <Button
            onClick={() => {
              handlePageChange("home");
            }}
            color="inherit"
          >
            Home
          </Button>
        </Box>

        {/* Modal for Menu */}
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {},
          }}
        >
          <Fade in={open}>
            <Slide in={open} direction="up" timeout={500}>
              <ModalBox>
                <Typography variant="h6">Menu</Typography>
                <Button
                  fullWidth
                  sx={{ marginBottom: 1 }}
                  onClick={() => {
                    handlePageChange("gibill");
                  }}
                >
                  GI Bill
                </Button>

                <Button
                  fullWidth
                  sx={{ marginBottom: 1 }}
                  onClick={() => {
                    handlePageChange("vaLoan");
                  }}
                >
                  VA Loan
                </Button>

                <Button
                  fullWidth
                  sx={{ marginBottom: 1 }}
                  onClick={() => {
                    handlePageChange("vaDisability");
                  }}
                >
                  VA Disability
                </Button>

                <Button
                  onClick={() => setOpen(false)}
                  fullWidth
                  sx={{ marginTop: 2 }}
                >
                  Close
                </Button>
              </ModalBox>
            </Slide>
          </Fade>
        </Modal>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
