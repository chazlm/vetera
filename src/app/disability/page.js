"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material"; // Using Material-UI for styling

const DisabilityPage = () => {
  const [activeTab, setActiveTab] = useState("content");

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" gutterBottom>
        disability
      </Typography>

      {/* Content Section */}
    </Box>
  );
};

export default DisabilityPage;
