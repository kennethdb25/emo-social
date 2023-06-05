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
 
         
          <TouchableOpacity>
            <Image
              source={require("../../assets/award.png")}
              style={styles.image}
            />
          </TouchableOpacity>
         
          <Text style={styles.text1}>Achievements</Text>

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
          <Text style={styles.tes}>Story</Text>
        
          <Text style={styles.tes1}>Explore Games</Text>
          <Text style={styles.tes2}>Daily Activity</Text>
      <View style={styles.contentContainer}>

  
      
        </View>
         
    
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
    
    justifyContent: "center",
    padding: 10,
    marginTop: 200,
    fontSize: 200,
    fontWeight: "bold",
  },
 
 tes:{
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
   
 tes1:{
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
tes2:{
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
  text:{
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 220,
    marginTop: -20,

  },
  text1:{
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 370,
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
    width: 30,
    height: 46,
    marginLeft: 340,
    marginTop: -40,
    alignItems: "center",
    justifyContent: "center",
  },
  image2: {
    position: 'absolute',
    flex: 1,
    width:37,
    height: 36,
    marginLeft: 180,
    marginTop: -30,
    alignItems: "center",
    justifyContent: "center",
  },
  image1: {
    position: 'absolute',
    flex: 1,
    width: 50,
    height: 50,
    marginLeft: 570,
    marginTop: -40,
    alignItems: "center",
    justifyContent: "center",
  },
  image4: {
    position: 'absolute',
    flex: 1,
    width: 50,
    height: 50,
    marginLeft: 500,
    marginTop: -40,
    alignItems: "center",
    justifyContent: "center",
  },
});