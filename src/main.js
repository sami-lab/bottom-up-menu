import React, { useState, useRef, useEffect } from "react";
import { Grid, IconButton, Paper } from "@mui/material";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

import WestIcon from "@mui/icons-material/West";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
  const [open, setOpen] = useState(true);
  const containerRef = useRef(null);
  const [dimensions, setDimentions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      setDimentions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, []);

  console.log(dimensions);
  return (
    <Wrapper>
      <Grid
        container
        direction='column'
        component={Paper}
        sx={{ background: "#fff", height: "100%", position: "relative" }}
        ref={containerRef}
        className='container'
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

        {dimensions.width > 0 && (
          <BottomSheet
            skipInitialTransition
            open={open}
            blocking={false}
            style={{
              "--rsbs-max-w": `${dimensions.width}px`,
              "--rsbs-ml": "auto",
              "--rsbs-mr": "auto",
            }}
            defaultSnap={({ maxHeight }) => maxHeight * 0.75}
            snapPoints={({ maxHeight }) => [maxHeight * 0.75, maxHeight * 0.9]}
          >
            <div>
              <p>
                You can combine this with to fine-tune the behavior you want.
                You can combine this with to fine-tune the behavior you want.
              </p>
              <p>
                You can combine this with to fine-tune the behavior you want.
                You can combine this with to fine-tune the behavior you want.
              </p>
            </div>
          </BottomSheet>
        )}
      </Grid>
    </Wrapper>
  );
}
