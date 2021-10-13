import React from "react";
import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HeaderIconWrapper = ({ resource }) => {
  return (
    <TouchableOpacity >
      <Image style={styles.iconDisplay} source={resource} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconDisplay: { height: "100%", aspectRatio: 1 },
});

export default HeaderIconWrapper;
