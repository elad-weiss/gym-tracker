import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from '../components/navigationBar';

export default function Custom({ route, navigation }) {
  return (
    <View style={styles.container}>
        <Text>Custom</Text>
      <NavigationBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
