import React from "react";
import { View, StyleSheet } from "react-native";

const BasicViewWrapper = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#95c8f4",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default BasicViewWrapper;
