import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NavigationBar(props) {

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.base}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Training')}>
            <Icon name="ios-barbell" size={36} color="#000" />
            <Text>Training</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Custom')}>
            <Icon name="ios-pencil-sharp" size={36} color="#000" />
            <Text>Custom</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Report')}>
            <Icon name="ios-bar-chart" size={36} color="#000" />
            <Text>Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 70,
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  base: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
