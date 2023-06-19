import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { Botao } from './Components/clicaveis';

export default function BemVindo() {

    return (
        <View style={styles.container}>
            <Image
                style={styles.Img}
                source={require('../assets/bemvindo.png')}
            />

            <Text style={styles.Text}>Finacie suas construções de maneira fácil e eficiente. Tudo online, e sem complicação!</Text>

            <Botao type="purple" text="Avançar" />
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#51FF62',
        flex: 1,
        height: '100%',
        alignItems: 'center',
        paddingBottom: 32,
        justifyContent: 'space-between'
    },
    Content: {
        width: '80%',
        alignItems: 'center'
    },
    Text: {
        fontSize: 25,
        width: '90%',
        color: "#67327A",
    },
    Img: {
        width: '100%',
        height: '38%',
    },
});