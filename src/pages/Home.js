import { React } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.barbie}>Barbie is everything. / Barbie é tudo.</Text>
            <Text style={styles.ken}>He's just Ken. / Ele é Ken?</Text>
            <Text style={styles.espaco}>It's Hidden</Text>
            <Button title="Next" onPress={() => navigation.navigate('Rest')}/>
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
  barbie: {
    color: '#fff',
    backgroundColor: '#ff007f',
    padding: 5,
    borderRadius: 5,
  },
  ken: {
    color: '#fff',
    backgroundColor: '#00bfff',
    padding: 5,
    borderRadius: 5,
  },
  espaco: {
    color: '#ffc0cb',
  }
});

export default Home;