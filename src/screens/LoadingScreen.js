import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function LoadingScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Landing");
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <ImageBackground
          source={require("../../assets/loadingImage.png")}
          style={styles.image}
        >
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={require("../../assets/play.png")}
              style={styles.image2}
            />
          </TouchableOpacity>
        </ImageBackground>
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
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image2: {
    position: "absolute",
    flex: 1,
    width: 130,
    height: 130,
    marginLeft: -80,
    marginTop: -73,
    alignItems: "center",
    justifyContent: "center",
  },
});
