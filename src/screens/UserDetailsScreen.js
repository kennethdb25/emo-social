import React, { useState } from 'react'
import axios from 'axios';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function UserDetailsScreen({ navigation }) {
  const [boy, setBoy] = useState(false);
  const [girl, setGirl] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handlePress = async () => {
    // const data = await axios.post('http://localhost:3000/users', {
    //   name,
    //   gender
    // });
    // console.log(data)
    // if (data.status === 201) {
    //   alert("Record Added");
    //   navigation.navigate("Dashboard");
    // }
    navigation.navigate("Dashboard");
  }

  const handlePressGirl = () => {
    setGirl(true);
    setGender('Girl')
  }
  const handlePressBoy = () => {
    setBoy(true);
    setGender("Boy")
  }

  const handlePressReset = () => {
    setBoy(false);
    setGirl(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#999" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={setName}
            value={name}
          />
        </View>
        <Text style={styles.title}>SELECT CHARACTER</Text>
        <View style={styles.imageContainer}>
          {!boy && !girl ? (
            <>
              <TouchableOpacity onPress={handlePressBoy}>
                <Image
                  source={require("../../assets/boy.png")}
                  style={styles.image}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePressGirl}>
                <Image
                  source={require("../../assets/girl.png")}
                  style={styles.image}
                />
              </TouchableOpacity>
            </>
          ) : boy ? (
            <>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/boy.png")}
                  style={styles.image}
                />
              </TouchableOpacity>
            </>
          ) : girl ? (
            <>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/girl.png")}
                  style={styles.image}
                />
              </TouchableOpacity>
            </>
          ) : null
          }

        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePress} disabled={!boy && !girl || !name ? true : false} style={styles.button}>
            <Text style={styles.buttonText} >
              DONE
            </Text>
          </TouchableOpacity>
          {boy || girl ? (
            <>
              <TouchableOpacity onPress={handlePressReset} style={styles.button}>
                <Text style={styles.buttonText}>
                  RESET
                </Text>
              </TouchableOpacity>
            </>
          ) : null}

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004FBF",
    marginTop: 20,
  },
  contentContainer: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 50,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 60,
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
});
