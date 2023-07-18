import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


export default function BackButton(props) {
    return (
        <View style={[props.style]}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Icon name="arrow-back-outline" size={28} color={'#000'} />
            </TouchableOpacity>
        </View>
    )
}