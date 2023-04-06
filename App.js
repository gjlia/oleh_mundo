import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Barbie is everything. / Barbie é tudo.</Text>
      <Text>He's just Ken. / Ele é Ken?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff69b4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
