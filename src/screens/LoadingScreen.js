import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LoadingScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>LoadingScreen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004FBF",
    marginTop: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
})
