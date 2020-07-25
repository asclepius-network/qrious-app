import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

export default function Toggle() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "white", true: "#D0D0D0" }}
        thumbColor={"white"}
        ios_backgroundColor="#4775f2"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
