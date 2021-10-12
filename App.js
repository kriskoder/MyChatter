import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ChatScreen from "./components/chatScreen/ChatScreen";
import ChatsView from "./components/chatsPanel/ChatsView";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyChatter">
        <Stack.Screen
          name="MyChatter"
          component={ChatsView}
          options={{ title: "MyChatter" }}
        />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
