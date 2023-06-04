import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity,Box, Pressable, ImageBackground } from "react-native";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
   
      
        <View style={styles.container}>
      <View style={styles.contentContainer}>
      
          <TouchableOpacity>
            <Image
              source={require("../../assets/tropy.png")}
              style={styles.image2}
            />
             
          </TouchableOpacity>
          <Text style={styles.text}>My Trophies</Text> 
          <Text>  asd  </Text>
         
          <TouchableOpacity>
            <Image
              source={require("../../assets/award.png")}
              style={styles.image}
            />
          </TouchableOpacity>
         
          <Text style={styles.text1}>Achievements</Text>
  a
           </View>
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
   
  },
  contentContainer: {
    width: "90%",
  
    padding: 20,
    marginTop: 50,
    fontSize: 200,
    fontWeight: "bold",
 
 box:{
  width: 70,
    height: 70,
  backgroundColor: "#E7BD6D",
 }

  
  },
  text:{
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: -150,

  },
  text1:{
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 200,
    marginTop: -30,
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
    position: 'absolute',
    flex: 1,
    width: 50,
    height: 76,
    marginLeft: 150,
    marginTop: -40,
    alignItems: "center",
    justifyContent: "center",
  },
  image2: {
    position: 'absolute',
    flex: 1,
    width:77,
    height: 76,
    marginLeft: -70,
    marginTop: -170,
    alignItems: "center",
    justifyContent: "center",
  },
});