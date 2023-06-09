import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Audio } from "expo-av";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoadingScreen from "./src/screens/LoadingScreen";
import UserDetailsScreen from "./src/screens/UserDetailsScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import { useEffect } from "react";
import StoryScreen from "./src/screens/StoryScreen";
import ExploreGamesScreen from "./src/screens/ExploreGamesScreen";
import DailyActivityScreen from "./src/screens/DailyActivityScreen";
import AudioBook from "./src/screens/AudioBook";

const Stack = createStackNavigator();

export default function App() {
  return <AppRoutes />;
}

const AppRoutes = () => {
  let soundObject = null;
  const playSound = async () => {
    soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require("./assets/music.mp3"));
      soundObject.setIsLoopingAsync(true);
      soundObject.setPositionAsync(5000);
      soundObject.setVolumeAsync(1.0);
      await soundObject.playAsync();
    } catch (error) {
      console.error("Failed to play sound", error);
    }
  };

  const stopSound = async () => {
    if (soundObject) {
      try {
        await soundObject.stopAsync();
        await soundObject.unloadAsync();
      } catch (error) {
        console.error("Failed to stop sound", error);
      }
    }
  };
  useEffect(() => {
    playSound();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Loading"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Landing" component={UserDetailsScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen
          name="Story"
          component={StoryScreen}
          options={{
            headerShown: false,
            headerTitle: "Story",
          }}
          initialParams={{ myPropFunction: stopSound }}
        />
        <Stack.Screen
          name="ExploreGames"
          component={ExploreGamesScreen}
          options={{
            headerShown: false,
            headerTitle: "ExploreGames",
          }}
          initialParams={{ myPropFunction: stopSound }}
        />
        <Stack.Screen name="AudioBook" component={AudioBook} />
        <Stack.Screen name="DailyActivity" component={DailyActivityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
