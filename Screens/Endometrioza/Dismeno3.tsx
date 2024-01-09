import { StyleSheet, Text, Image, Dimensions, View } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("screen");
const KlinickyVyznamne = () => {
  const { navigate } = useNavigation();
  return (
    <Layout>
      <Image
        source={require("../../assets/end3.png")}
        style={{
          width: width - 80,
          height: height - 320,
          resizeMode: "contain",
        }}
      />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            //@ts-ignore
            navigate("endometrioza/dismeno");
          }}
        >
          <Image
            style={{ width: 100, height: 100, marginRight: 10 }}
            source={require("../../assets/en1.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            //@ts-ignore
            navigate("endometrioza/dismeno2");
          }}
        >
          <Image
            style={{ width: 100, height: 100, marginRight: 10 }}
            source={require("../../assets/en2.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            //@ts-ignore
            navigate("endometrioza/dismeno3");
          }}
        >
          <Image
            style={{ width: 100, height: 100, marginRight: 10 }}
            source={require("../../assets/en3.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            //@ts-ignore
            navigate("endometrioza/dismeno4");
          }}
        >
          <Image
            style={{ width: 100, height: 100, marginRight: 10 }}
            source={require("../../assets/en4.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            //@ts-ignore
            navigate("endometrioza/dismeno5");
          }}
        >
          <Image
            style={{ width: 100, height: 100, marginRight: 10 }}
            source={require("../../assets/en5.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            //@ts-ignore
            navigate("endometrioza/dismeno6");
          }}
        >
          <Image
            style={{ width: 100, height: 100, marginRight: 10 }}
            source={require("../../assets/en6.png")}
          />
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default KlinickyVyznamne;

const styles = StyleSheet.create({
  nadpis: {
    fontSize: 30,
    color: "#003f8b",
    marginTop: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
