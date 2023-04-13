import { React } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Rest = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BARBIE - Julho nos Cinemas</Text>
            <Text style={styles.espaco}>It's Hidden</Text>
            <Button title="Previous" onPress={() => navigation.navigate('Home')}/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc0cb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    backgroundColor: '#ff69b4',
    padding: 5,
    borderRadius: 5,
  },
  espaco: {
    color: '#ffc0cb',
  }
});

export default Rest;