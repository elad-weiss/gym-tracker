import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackButton from '../components/backButton';


export default function SessionBuilder({ route, navigation }) {
    return (
        <View style={styles.container}>
            <BackButton navigation={navigation} style={styles.backButton} />

            <Text>Session Builder</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%',
    },
    backButton: {
        position: 'absolute',
        top: 35,
        left: 20,
    },
});