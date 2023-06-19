
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, SafeAreaViewLinking } from 'react-native';
import { Botao } from './Components/clicaveis.jsx';

export default function RegistroLoja() {

    return (
        <View style={styles.container}>
            <Text style={styles.Title}>Cadastre sua loja</Text>
            
            <Text style={styles.Text}>Nome: :</Text>
            <TextInput style={styles.TxtInput} placeholder="" placeholderTextColor="white"></TextInput>
            
            <Text style={styles.Text}>Endereço: </Text>
            <TextInput style={styles.TxtInput} placeholder="" placeholderTextColor="white"></TextInput>
            
            <Text style={styles.Text}>Telefone: </Text>
            <TextInput style={styles.TxtInput} placeholder="" placeholderTextColor="white"></TextInput>
            
            <Text style={styles.Text}>website: </Text>
            <TextInput style={styles.TxtInput} placeholder="" placeholderTextColor="white"></TextInput>

            <Botao type="green" text="Cadastrar"/>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#67327A',
        alignItems: 'center',
        paddingHorizontal: '5%',
        justifyContent: 'center',
    },
    Title: {
        fontSize: 30,
        textAlign: 'center',
        color: "#FFFFFF",
    },
    Text: {
        fontSize: 25,
        width: '100%',
        color: "#f8f2f2",
    },
    TxtInput: {
        width: "100%",
        height: '6%',
        padding: 5,
        borderRadius: 20,
        backgroundColor: '#D4F6DD',
        placeholderTextColor: '#67327A',
        fontSize: 20,
    },
});
