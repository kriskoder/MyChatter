import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SendMessageContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} placeholder="Message..." />
        <TouchableOpacity style={styles.cameraIconContainer}>
          <Image
            style={styles.iconStyle}
            source={require("../../assets/icons/camera-icon.png")}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image
          style={styles.iconStyle}
          source={require("../../assets/icons/send-icon.png")}
        />
      </TouchableOpacity>
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
  textInputContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    borderRadius: 20,
    paddingRight: 10,
    paddingLeft: 17,
    marginRight: 5,
  },
  cameraIconContainer: {
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    flex: 1
  },
  iconStyle: {
    height: "100%",
    aspectRatio: 1
  },
});

export default SendMessageContainer;
