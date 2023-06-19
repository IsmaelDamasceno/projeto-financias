import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    TextInput,
    SafeAreaViewLinking,
    Alert,
}
from 'react-native';
import { Botao, Hyperlink } from './Components/clicaveis.jsx';

import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword
    , getAuth
} from 'firebase/auth'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { firebaseConfig } from '../firebaseConfig';

export default function Loginusuario() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    function handleCreateAccount() {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log("User criado");
                const user = userCredential.user;
            })
    }

    function handleSignIn() {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log("Usuário logado");
                const user = userCredential.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
                Alert.alert(error.message);
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.Fields}>
                <Text style={styles.Title}>Entre em uma conta</Text>

                <Text style={styles.Text}>Email</Text>
                <TextInput style={styles.TxtInput} placeholder="email@exemplo.com" placeholderTextColor="#69535c" onChangeText={setEmail}></TextInput>

                <Text style={styles.Text}>Senha</Text>
                <TextInput style={styles.TxtInput} placeholder="" placeholderTextColor="#69535c" onChangeText={setPassword}></TextInput>
                
                <Hyperlink text="Não possuo conta" />
            </View>

            <View style={styles.Buttons}>
                <Botao type="green" text="Entrar" onPress={handleSignIn} />
                <Botao type="green" text="Create" onPress={handleCreateAccount} />
            </View>

            {/* <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.txtbutton}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
                <Text style={styles.txtbutton}>Create</Text>
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '5%',
        flex: 1,
        backgroundColor: '#67327A',
        alignItems: 'center',
        padding: '10%',
        justifyContent: 'center',
    },
    Fields: {
        width: '100%',
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
        height: '12%',
        padding: 5,
        borderRadius: 20,
        backgroundColor: '#D4F6DD',
        placeholderTextColor: '#67327A',
        fontSize: 20,
    },
});
