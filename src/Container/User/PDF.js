import React, { useState } from "react";
import Axios from "axios";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
//import { API_KEY } from "./constants";
import { PdfDocument } from "./Movies";
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";



export default function MovieList() {
 

  return (
    <Grid 
    container
    direction="row"
    justify="center"
    alignItems="center"
    style={{marginTop:100}}
  >
    <PDFViewer style={{height:"100vh",width:"50%",minWidth:400}}>
        <PdfDocument/>
    </PDFViewer>  

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
   
    <Button
        variant="contained"
        color="primary"     
    >
                                          
      <PDFDownloadLink
   
        document={<PdfDocument />}
        fileName="RESUME.pdf"
        style={{
          padding: "10px",
          color: "white",
          //background: "primary",
          border: "1px solid #4a4a4a"
        }}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Pdf"
        }
      </PDFDownloadLink>
      </Button>
      </Grid>
    
  );
}
