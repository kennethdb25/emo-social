import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Pressable, ImageBackground } from "react-native";


export default function LoadingScreen({ navigation }) {

  const handlePress = () => {
    navigation.navigate('Landing');
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
              source={require("../../assets/play-button.png")}
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
    position: 'absolute',
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image2: {
    position: 'absolute',
    flex: 1,
    width: 150,
    height: 90,
    marginLeft: -80,
    alignItems: "center",
    justifyContent: "center",
  },
});
