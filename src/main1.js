import React, { useState, useRef, useEffect } from "react";
import { Box, Grid, IconButton, Paper } from "@mui/material";

import WestIcon from "@mui/icons-material/West";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Resizable } from "re-resizable";

const Wrapper = ({ children }) => {
  return (
    <Grid container justifyContent='center' sx={{ minHeight: "300px" }}>
      <Grid item sx={{ maxWidth: "350px", minHeight: "100vh" }}>
        {children}
      </Grid>
    </Grid>
  );
};
export default function Index() {
  const containerRef = useRef(null);
  const minHeight = "75vh";
  const maxHeight = "90vh";

  const [sheetHeight, setSheetHeight] = useState(minHeight);

  return (
    <Wrapper>
      <Grid
        container
        direction='column'
        component={Paper}
        sx={{ background: "#fff", height: "100%", position: "relative" }}
        ref={containerRef}
      >
        <Grid item sx={{ width: "100%", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 10,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          >
            <Grid container justifyContent='space-between' sx={{ px: "20px" }}>
              <Grid item>
                <IconButton sx={{ background: "#fff", borderRadius: 2 }}>
                  <WestIcon style={{ fill: "#000" }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton sx={{ background: "#fff", borderRadius: 2 }}>
                  <ArrowForwardIcon style={{ fill: "#000" }} />
                </IconButton>
              </Grid>
            </Grid>
          </div>
          <img src='/food.jpg' style={{ width: "100%", height: "auto" }} />
        </Grid>

        <div
          style={{
            position: "absolute",
            bottom: 0,

            width: "100%",
          }}
        >
          <Resizable
            size={{ width: "100%", height: sheetHeight }}
            maxHeight={maxHeight}
            minHeight={minHeight}
            enable={{
              right: false,
              left: false,
              top: true,
              bottom: false,
            }}
            className='scrollable-element'
            style={{
              overflowY: "auto",
              zIndex: 2,
              transition: "height 0.5s ease",
            }}
            onResizeStop={(e, direction, ref, d) => {
              console.log(d);
              if (d.height > 0) {
                setSheetHeight(maxHeight);
              } else {
                setSheetHeight(minHeight);
              }
              //use this if you wantto allow free resize
              //setSheetHeight((w) => w + d.height);
            }}
          >
            <Paper
              style={{
                boxShadow:
                  "0 -5px 60px 0 rgba(38, 89, 115, 0.11), 0 -1px 0 rgba(38, 89, 115, 0.05)",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                height: "100%",
                width: "100%",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "36px",
                  height: "4px",
                  top: "8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: "2px",
                  backgroundColor: "hsla(0, 0%, 0%, 0.14)",
                }}
              />
            </Paper>
          </Resizable>
        </div>
      </Grid>
    </Wrapper>
  );
}
