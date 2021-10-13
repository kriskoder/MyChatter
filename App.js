import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ChatScreen from "./containers/ChatScreen";
import HomeScreen from "./containers/HomeScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyChatter">
        <Stack.Screen
          name="MyChatter"
          component={HomeScreen}
          options={{ title: "All Chats" }}
        />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
