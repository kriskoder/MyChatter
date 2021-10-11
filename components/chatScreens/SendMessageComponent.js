import React from "react";
import { View, TextInput, StyleSheet, Button, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SendMessageContainer = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Message..." />
      <View style={styles.sendButton}>
        <TouchableOpacity>
          <Image
            style={styles.iconStyle}
            source={require("../../assets/icons/send-icon.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
    height: 40,
    flexDirection: "row",
    marginVertical: 5,
  },
  textInput: {
    paddingHorizontal: 17,
    borderRadius: 20,
    flex: 7,
    backgroundColor: "white",
    marginRight: 5,
  },
  sendButton: {
    alignItems: "center",
    flex: 1,
  },
  iconStyle: {
    height: "100%",
    aspectRatio: 1,
  },
});

export default SendMessageContainer;
