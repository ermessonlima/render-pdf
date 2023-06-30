import React from "react";
import { Page, Document, StyleSheet, Image, Font } from "@react-pdf/renderer";
import Motiva from "./motiva/MotivaSansRegular.woff.ttf";
import MotivaBold from "./motiva/MotivaSansBold.woff.ttf";
import { Item } from "./card";
import Title from "./title";

Font.register({ family: "Motiva", src: Motiva });
Font.register({ family: "MotivaBold", src: MotivaBold });

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    backgroundColor: "#E4E4E4",
    fontFamily: "Motiva",
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  title: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "MotivaBold",
  },
});

const MyDocument = ({ page }) => ( 
  <Document>
    <Page>
      <Image
        src="./capa.png"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
        }}
        cache={true}
      />
    </Page>
    <Page  style={styles.body}>
    {Array.from({ length: page }).map((_, index) => (
   <div key={index}>
        <Title />
        <Item />
        </div>
        ))}
        </Page>
  </Document>
);

export default MyDocument;
