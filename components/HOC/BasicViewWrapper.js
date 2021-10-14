import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../constants/colors";

const BasicViewWrapper = ({children}) => {
  return (
    <View style={ styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainViewBg
  },
});
export default BasicViewWrapper;
