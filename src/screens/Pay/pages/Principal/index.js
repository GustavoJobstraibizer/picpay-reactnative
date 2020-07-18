import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Principal() {
  return (
    <View style={[styles.scene, { backgroundColor: "#000" }]}>
      <Text style={{ color: "#fff" }}>Sugestões para você</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
