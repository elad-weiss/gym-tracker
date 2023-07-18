import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from '../components/navigationBar';

export default function Report({ route, navigation }) {
  return (
    <View style={styles.container}>
        <Text>Report</Text>
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
