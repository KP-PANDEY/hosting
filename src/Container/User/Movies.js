import React from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


   const styles = StyleSheet.create({
    body: {
      // paddingTop: 35,
      // paddingBottom: 65,
      // paddingHorizontal: 35,
      flexDirection: 'column',
      backgroundColor: '#E4E4E4'
    },
    title: {
      margin: 12,
      fontSize: 24,
      textAlign: 'center',
    },
    author: {
      fontSize: 16,
      textAlign: 'left',
      marginLeft: 20,
    },
    subtitle: {
      fontSize: 18,
      marginLeft: 60,
      marginTop: 20,
  
      textAling: "left",
    },
    text: {
      margin: 0,
      fontSize: 16,
      textAlign: 'justify',
      fontFamily: 'Times-Roman',
      flexGrow: 0,
    },
    image: {
      width: 150,
      height: 120,
      marginLeft: 20
  
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
  
    section: {
      flexDirection: 'row',
      marginTop: 50,
      flexGrow: 1,
    },
    section1: {
      flexDirection: 'row',
      marginTop: 10,
      marginLeft: 100,
      flexGrow: 0,
    },
  });




export function PdfDocument(props) {
    console.log("pdf props", props.data);
    var details = JSON.parse(localStorage.getItem("details"))
    return (
        <Document>
            <Page >
             
                      
    <Text style={styles.title}>RESUME</Text>
      <View style={styles.subtitle}>
        <Text>NAME:-&nbsp;&nbsp;{details.Name} </Text>
        <Text>MOBLE NO:-&nbsp;&nbsp; {details.MobileNumber}</Text>
        <Text>DATE OF BIRTH:-&nbsp;&nbsp; {details.DOB} </Text>
        <Text>EMAIL ID:-&nbsp;&nbsp;  {details.Email}</Text>
        <Text>AGE:-&nbsp;&nbsp; {details.Age} </Text>
        <Text>---------------------------------------------------------------------------------- </Text>
        {/* SSC: details.SSC,
            HSC: details.HSC,
            Btech: details.BTECHAGGREGATE,
            Backlogs: details.Backlogs,
            SchoolSSC: details.SSCSCHOOLNAME,
            SchoolHHC: details.HSCSCHOOLNAME, */}
        <Text style={styles.text}>EDUCATIONAL DETAILS: </Text>
        <Text style={styles.author}>Secondary Details:-&nbsp;&nbsp;{details.SSC} </Text>
        <Text style={styles.author}>Senior Secondary Details :-&nbsp;&nbsp;{details.HSC} </Text>
        <Text style={styles.author}>Degree Aggregate :-&nbsp;&nbsp;{details.BTECHAGGREGATE} </Text>
        <Text style={styles.author}>Secondary Scahool Name :-&nbsp;&nbsp;{details.SSCSCHOOLNAME} </Text>
        <Text style={styles.author}>Senior Secondary Scahool Name :-&nbsp;&nbsp;{details.HSCSCHOOLNAME} </Text>
        <Text style={styles.author}>Active Backlogs :-&nbsp;&nbsp;{details.Backlogs} </Text>
        <Text>---------------------------------------------------------------------------------- </Text>

        <Text style={styles.text}>PERSONAL DETAILS: </Text>
        <Text style={styles.author}>Gender:-&nbsp;&nbsp;{details.Gender} </Text>
        <Text style={styles.author}>Father's Name:-&nbsp;&nbsp;{details.FatherName} </Text>
        <Text style={styles.author}>Mother's Name:-&nbsp;&nbsp;{details.MothersName} </Text>
        <Text style={styles.author}>Date Of Birth:-&nbsp;&nbsp;{details.DOB} </Text>
        <Text style={styles.author}>Address:-&nbsp;&nbsp;{details.Address} </Text>

        <Text>---------------------------------------------------------------------------------- </Text>
        <Text>    </Text>
        <Text style={styles.author}> DATE                                                                                   PLACE </Text>

        {/* Address: details.Address,
            Age: details.Age,
            FatherName: details.FatherName,
            MotherName: details.MothersName,
            DOB:details.DOB,
            Year: details.Year, */}
      </View>
            </Page>
        </Document>
    );
}