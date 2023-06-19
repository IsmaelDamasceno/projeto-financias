
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, SafeAreaViewLinking } from 'react-native';
import Botao from './Components/clicaveis.jsx';

export default function Loja() {
    return (
        <View style={styles.container}>
            <Text style={styles.Title}>Antes de continuarmos...</Text>
            <Text style={styles.Text}>Caso você tenha uma loja de materiais de construção, você pode registra-lá para que seus clientes encontrem seus produtos pelo aplicativo.</Text>

            <View style={styles.Buttons}>
                <Botao type="green" text="Registrar Loja"/>
                <Botao type="green" text="Continuar"/>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#67327A',
        alignItems: 'center',
        paddingVertical: '40%',
        justifyContent: 'space-between',
        paddingHorizontal: '10%'
    },
    Title: {
        fontSize: 30,
        textAlign: 'center',
        color: "#FFFFFF",
    },
    Text: {
        fontSize: 25,
        width: '100%',
        textAlign: 'justify',
        color: "#f8f2f2",
    },
    Buttons: {
        height: '20%',
        alignItems: 'center'
    }
});
