
import { StyleSheet, View, Text, Image } from "react-native";

export default function Projeto(props) {
    return (
        <View style={styles.Projeto}>
            <Text style={[styles.Text, styles.ProjName]}>
                { props.nome }
            </Text>
            <Text style={[styles.Text, styles.ProjData]}>
                { props.data }
            </Text>
            <Image source={require("../../assets/Trashcan.png")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    Projeto: {
        backgroundColor: '#6D3481',
        display: 'flex',
        flexDirection: 'row',
        padding: 12,
        justifyContent: 'space-between',
        marginVertical: 8,

        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3
    },
    Text: {
        color: '#FFFFFF'
    },
    ProjName: {
        fontSize: 20,
        width: '40%',
    },
    ProjData: {
        fontSize: 20,
        width: '35%',
    }
});
