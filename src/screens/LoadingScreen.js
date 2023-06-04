import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function LoadingScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={require("../../assets/loadingImage.png")} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  }
})
