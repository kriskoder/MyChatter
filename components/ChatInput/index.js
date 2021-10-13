import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SendMessageContainer = () => {
  return (
    <View style={styles.sendMessageContainer}>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} placeholder="Message..." />
        <TouchableOpacity style={styles.cameraIconContainer}>
          <Image
            style={styles.cameraIconStyle}
            source={require("../../assets/icons/camera-icon.png")}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.sendIconContainer}>
        <Image
          style={styles.sendIconStyle}
          source={require("../../assets/icons/send-icon.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sendMessageContainer: {
    marginHorizontal: "5%",
    height: 40,
    flexDirection: "row",
    marginVertical: 5,
  },
  textInputContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    flex: 7,
    alignItems: "center",
    borderRadius: 20,
    paddingRight: 10,
    paddingLeft: 17,
    marginRight: 5,
  },
  textInput: {
    flex: 9,
  },
  cameraIconContainer: {
    flex: 1,
    justifyContent: "center",
    marginRight: 3,
  },
  cameraIconStyle: {
    height: 20,
    aspectRatio: 1,
  },
  sendIconStyle: {
    height: 20,
    aspectRatio: 1,
  },
  sendIconContainer: {
        width: 40,
    height: 40,
    backgroundColor: "#008cff",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SendMessageContainer;
