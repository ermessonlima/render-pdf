import React from "react"; 
 
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
 

import Motiva from "./motiva/MotivaSansRegular.woff.ttf";
import MotivaBold from "./motiva/MotivaSansBold.woff.ttf";
import { Item } from "./card";


Font.register({ family: "Motiva", src: Motiva });
Font.register({ family: "MotivaBold", src: MotivaBold });

// Crie estilos
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

// Crie o componente de documento
const Title = () => (
  <View
  style={{
    width: "100%",
    height: 30,
    borderRadius: 10,
    backgroundColor: "#0B6861",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    marginTop: 10,
  }}
>
  <Text style={styles.title}>{`Energia (EEM)`}</Text>
  <Text style={styles.title}>6 de 22</Text>
</View>
);

export default Title;
