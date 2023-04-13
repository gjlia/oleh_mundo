import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Rest = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BARBIE - Julho nos Cinemas</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    backgroundColor: '#ff69b4',
    padding: 5,
    borderRadius: 5,
  }
});

export default Rest;