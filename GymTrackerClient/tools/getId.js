import * as SecureStore from 'expo-secure-store';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default async function getId() {
    //get UUID from internal storage
    const fetchUUID = await SecureStore.getItemAsync('secure_device_id');
    //if UUID exists in the internal storage return it 
    if (fetchUUID) {
        return fetchUUID;
    }
    //if UUID doesn't exist in the internal storage create a new UUID, store it and return it
    const newUUID = uuidv4();
    await SecureStore.setItemAsync('secure_device_id', JSON.stringify(newUUID));
    return newUUID;
}