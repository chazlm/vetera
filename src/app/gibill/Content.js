import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import Collapse from "@mui/material/Collapse"; // Using Material-UI Collapse for collapsibility

export const Content = ({ isCollapsed, toggle }) => {
  return (
    <>
      <Button onClick={toggle} variant="contained" sx={{ marginBottom: 2 }}>
        GI Bill
      </Button>
      <Collapse in={!isCollapsed}>
        <Box
          sx={{
            padding: "1rem",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: 1,
          }}
        >
          <Typography variant="body1" paragraph>
            The GI Bill is a significant benefit provided to veterans and
            service members, offering financial assistance for education and
            training. It was initially introduced after World War II to help
            returning soldiers reintegrate into civilian life by providing them
            with opportunities for higher education. Over the years, the GI Bill
            has evolved, with the most current version being the Post-9/11 GI
            Bill.
          </Typography>
          <Typography variant="h6">Key Points:</Typography>
          <ul>
            <li>
              <Typography variant="body2">
                The Post-9/11 GI Bill covers tuition and fees, provides a
                monthly housing allowance, and includes a stipend for books and
                supplies.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Eligibility is generally based on active duty service after
                September 10, 2001. Full benefits are available to those who
                served 36 months or more.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                The GI Bill also includes a transferability option, allowing
                service members to transfer benefits to family.
              </Typography>
            </li>
          </ul>

          <Typography variant="h6">FAQs:</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Who is eligible for the GI Bill?
          </Typography>
          <Typography variant="body2" paragraph>
            Eligibility for the Post-9/11 GI Bill is primarily based on active
            duty service after September 10, 2001. Veterans with an honorable
            discharge are typically eligible.
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            What expenses does the GI Bill cover?
          </Typography>
          <Typography variant="body2" paragraph>
            The Post-9/11 GI Bill covers up to 100% of tuition and fees at
            public schools for in-state students. It also provides a monthly
            housing allowance, a stipend for books, and more.
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            Can I transfer my GI Bill benefits to my family?
          </Typography>
          <Typography variant="body2" paragraph>
            Yes, service members may transfer unused GI Bill benefits to their
            spouse or dependent children if they meet specific service
            requirements.
          </Typography>

          <Link
            href="https://www.va.gov/education/about-gi-bill-benefits/"
            target="_blank"
            rel="noopener"
            sx={{ display: "block", marginTop: 2 }}
          >
            Learn more about the GI Bill on the VA website
          </Link>
        </Box>
      </Collapse>
    </>
  );
};
