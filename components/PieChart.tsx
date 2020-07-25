import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native';

const graphicColor = ['#fcd12a', '#ededeb'];
const wantedGraphicData = [{ y: 37 }, { y: 63 }];
//[{'key': "", 'y': this.state.metric}, {'key': "", 'y': (100-this.state.metric)} ]
const defaultGraphicData = [{ y: 0 }, { y: 100 }];

export default function PieChart() {
  const [graphicData, setGraphicData] = useState(defaultGraphicData);

  useEffect(() => {
    setGraphicData(wantedGraphicData);
  }, []);

  return (
    <View style={styles.container}>
      <VictoryPie
        animate={{ easing: 'exp' }}
        data={graphicData}
        width={300}
        height={300}
        colorScale={graphicColor}
        innerRadius={75}
        labels={() => null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: -20
  }
});
