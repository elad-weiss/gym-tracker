import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackButton from '../components/backButton';


export default function NewWorkout({ route, navigation }) {
    return (
        <View style={styles.container}>
            <BackButton navigation={navigation} style={styles.backButton} />
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>LOAD PRESET</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SessionBuilder")}>
                <Text style={styles.text}>NEW WORKOUT</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%',
    },
    title: {
        position: 'absolute',
        top: 70,
        left: 20,
        fontSize: 18,
    },
    backButton: {
        position: 'absolute',
        top: 35,
        left: 20,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#e2424e',
        padding: 12,
        width: 225,
        borderRadius: 15,
        margin: 30,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});