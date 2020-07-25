import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StackRouter } from "react-navigation";

export default function ScanScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [code, setCode] = useState("default");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const createAlert = () =>
    Alert.alert(
      "QR 코드가 성공적으로 스캔되었습니다.",
      "",
      [
        {
          text: "인증화면으로 들어가기",
          onPress: () =>
            navigation.navigate("Send", {
              qrCode: code,
            }),
        },
      ],
      { cancelable: false }
    );

  const handleBarCodeScanned = ({ type, data }) => {
    if (data != "default") {
      setCode(data);
      createAlert();
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
    </View>
  );
}

ScanScreen.navigationOptions = {
  header: null,
};
