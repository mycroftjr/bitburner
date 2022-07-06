import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BadText } from "./BadText";
import { WorldMap } from "./worldmap";

export function PublicCrimeRoot(): React.ReactElement {
  return (
    <>
      <Box
        style={{ border: "5px", borderColor: "white", borderStyle: "solid", display: "inline-block", padding: "10px" }}
      >
        <WorldMap />
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button>
        <BadText normal="bribe" mistake="lobbying" />
      </Button>
      <br />
      <br />
      <Button>
        <BadText normal="lie" mistake="make campaign promise" />
      </Button>
    </>
  );
}
