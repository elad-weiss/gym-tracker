import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function StartButton(props) {

    return (
        <View style={[styles.container, props.style]}>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('NewWorkout')}>
                <Text style={styles.text}>START WORKOUT</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {

    },
    button: {
        alignItems: 'center',
        backgroundColor: '#e2424e',
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 15,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})