import { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Text, View } from 'react-native';
import Constants from 'expo-constants';
import NavigationBar from '../components/navigationBar';
import SessionOutline from '../components/sessionOutline';
import StartButton from '../components/startButton';
import getId from '../tools/getId';

export default function Training({ route, navigation }) {
  
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse]= useState();
  const [id, setId] = useState();

  useEffect(() => {
    const setUUID = async () => {
      const UUID = await getId();
      setId(UUID);
    }

    setUUID();
  }, []);

  useEffect(() => {
    getContent();
  }, [id])

  const getContent = async () => {
    if (!id) { return; }
    const rawResponse = await fetch(`http://10.0.0.13:8080/lastn/${id.replace(/"/g, '')}/2`);
    const content = await rawResponse.json();
    setResponse(content.response);
    setIsLoading(false);
  }

  if(!isLoading) {
    return (
      <View style={styles.container}>
        {(response != undefined) ? <FlatList
          data={response}
          renderItem={({item}) => <SessionOutline content={item} style={{alignSelf: 'center'}}/>}
          keyExtractor={item => item.id}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        /> : 
          <Text style={styles.defaultText}>No exercise history yet</Text>}
        <StartButton style={styles.startButton} navigation={navigation} />
        <NavigationBar navigation={navigation} />
      </View>
    );
  }
  if (isLoading) {
    return (<ActivityIndicator size='large' style={{height: '100%'}} />);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    marginTop: 40,
    width: '100%',
  },
  startButton: {
    position: 'absolute',
    bottom: 80,
    marginTop: 10,
  },
  defaultText: {
    fontSize: 20,
  }
});
