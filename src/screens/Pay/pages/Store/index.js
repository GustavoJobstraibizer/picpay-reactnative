import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Store() {
  return (
    <View style={[styles.scene, { backgroundColor: "#000" }]}>
      <Text style={{ color: "#fff" }}>Store Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
