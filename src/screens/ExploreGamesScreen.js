import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRoute } from '@react-navigation/native'

export default function ExploreGamesScreen({ navigation }) {
  const route = useRoute();
  const { myPropFunction } = route.params;

  const handlePress1stGame = async () => {
    myPropFunction();
  }

  const handlePress2ndGame = async () => {
    myPropFunction();
  }

  const handlePress3rdGame = async () => {
    myPropFunction();
  }

  const handlePress4thGame = async () => {
    myPropFunction();
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/home.png")}
            style={styles.image5}
          />
        </TouchableOpacity>
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
        <TouchableOpacity>
          <Text style={styles.button}> Explorer Games</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress1stGame}>
          <Text style={styles.text3}>
            <Image
              source={require("../../assets/bike.png")}
              style={styles.images}
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress2ndGame}>
          <Text style={styles.text4}>
            <Image
              source={require("../../assets/while.png")}
              style={styles.images1}
            />{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress3rdGame}>
          <Text style={styles.text5}>
            <Image
              source={require("../../assets/talking.png")}
              style={styles.images2}
            />
          </Text>
          {/* <Text style={styles.textnames1}>Talking With</Text> */}
          {/* <Text style={styles.textnames1}>   Friends</Text> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress4thGame}>
          <Text style={styles.text6}></Text>
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
    backgroundColor: "#96998C",
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
    marginLeft: -4,
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 150,
    flexDirection: "row",
    height: 150,
  },
  text4: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 170,
    marginTop: -150,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    flexDirection: "row",
    height: 150,
    backgroundColor: "#fff",
  },
  text5: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 340,
    marginTop: -150,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    flexDirection: "row",
    height: 150,
    backgroundColor: "#fff",
  },
  text6: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 510,
    marginTop: -150,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    flexDirection: "row",
    height: 150,
    backgroundColor: "#E7BD6D",
  },
  textnames: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 50,
    marginTop: 1,
  },
  textnames1: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 180,
    marginTop: 1,
  },
  textnames2: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 50,
    marginTop: 1,
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
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -30,
    width: "20%",
    flexDirection: "row",
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

  image5: {
    position: "absolute",
    flex: 1,
    width: 37,
    height: 36,
    marginLeft: 1,
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
  images: {
    position: "absolute",
    flex: 1,
    width: 150,
    height: 100,
    marginLeft: 650,
    marginTop: -100,
    alignItems: "center",
    justifyContent: "center",
  },
  images1: {
    position: "absolute",
    flex: 1,
    width: 150,
    height: 100,
    marginLeft: 650,
    marginTop: -100,
    alignItems: "center",
    justifyContent: "center",
  },
  images2: {
    position: "absolute",
    flex: 1,
    width: 150,
    height: 100,
    marginLeft: 650,
    marginTop: -100,
    alignItems: "center",
    justifyContent: "center",
  },
});
