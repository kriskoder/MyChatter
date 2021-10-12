import React from "react";
import { Text, Button, StyleSheet, View } from "react-native";
import BasicViewWrapper from "./wrappers/BasicViewWrapper";


export const HomeScreen = ({ navigation }) => {
  return (
    <BasicViewWrapper>
      <View style={styles.homeContainer}>
        <Text>Home Screen</Text>
        <Button
          title="Go to chat"
          onPress={() => {
            navigation.navigate("MyChatter");
          }}
        />
      </View>
    </BasicViewWrapper>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
