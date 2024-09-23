"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material"; // Using Material-UI for styling
import { Content } from "./Content";

const GIBillPage = () => {
  const [activeTab, setActiveTab] = useState("content");

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" gutterBottom>
        GI Bill Information
      </Typography>

      {/* Content Section */}
      <Content
        isCollapsed={activeTab !== "content"}
        toggle={() => toggleTab("content")}
      />
    </Box>
  );
};

export default GIBillPage;
