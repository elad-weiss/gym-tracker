import { StyleSheet, Text, View } from "react-native";

export default function SessionOutline(props) {

    const { content } = props;

    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.title}>{content.title}</Text>
            <Text style={styles.subTitle}>{content.exNum} exercises</Text>
            <View style={styles.exerciseRow}><Text>{content.ex1Name}</Text><Text>{content.ex1Reps}X{content.ex1Sets}</Text></View>
            <View style={styles.exerciseRow}><Text>{content.ex2Name}</Text><Text>{content.ex2Reps}X{content.ex2Sets}</Text></View>
            <View style={styles.exerciseRow}><Text>{content.ex3Name}</Text><Text>{content.ex3Reps}X{content.ex3Sets}</Text></View>
            <Text style={styles.viewMore}>view more</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '90%',
        padding: 10,
        borderRadius: 10,
        marginVertical: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    subTitle: {
        fontSize: 16,
        marginBottom: 10,
    },
    exerciseRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 2,
    },
    viewMore: {
        color: '#1010aa',
        textAlign: 'right',
        margin: 3,
    },
})