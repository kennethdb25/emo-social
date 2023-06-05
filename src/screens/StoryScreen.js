import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function StoryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/tropy.png")}
            style={styles.image2}
          />
          <Text style={styles.text}>My Trophies</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/award.png")}
            style={styles.image}
          />
          <Text style={styles.text1}>Achievements</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/setting.png")}
            style={styles.image1}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/user.png")}
            style={styles.image4}
          />
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.text3}>Story 1</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.text4}>Story 2</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.text5}>Story 3</Text>
        </TouchableOpacity>
        <View style={styles.contentContainer}></View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E7BD6D",
    marginTop: 20,
  },
  contentContainer: {
    width: "90%",
    justifyContent: "center",
    padding: 10,
    marginTop: 100,
    fontSize: 200,
    fontWeight: "bold",
  },
  text3: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6d97e7",
    width: 150,
    flexDirection: "row",
    height: 150,
  },
  text4: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 200,
    marginTop: -150,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    flexDirection: "row",
    height: 150,
    backgroundColor: "#999999",
  },
  text5: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 400,
    marginTop: -150,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    flexDirection: "row",
    height: 150,
    backgroundColor: "#bd6de7",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 190,
    marginTop: -40,
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 355,
    marginTop: -40,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  image: {
    width: 70,
    height: 70,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 20,
    width: "20%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  image: {
    position: "absolute",
    flex: 1,
    width: 30,
    height: 46,
    marginLeft: 320,
    marginTop: -50,
    alignItems: "center",
    justifyContent: "center",
  },
  image2: {
    position: "absolute",
    flex: 1,
    width: 37,
    height: 36,
    marginLeft: 150,
    marginTop: -45,
    alignItems: "center",
    justifyContent: "center",
  },
  image1: {
    position: "absolute",
    flex: 1,
    width: 45,
    height: 45,
    marginLeft: 570,
    marginTop: -50,
    alignItems: "center",
    justifyContent: "center",
  },
  image4: {
    position: "absolute",
    flex: 1,
    width: 50,
    height: 50,
    marginLeft: 500,
    marginTop: -50,
    alignItems: "center",
    justifyContent: "center",
  },
});
