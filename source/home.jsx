
import React, { useState, useEffect } from "react";
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Botao } from './Components/clicaveis.jsx';
import Projeto from './Components/projeto.jsx';

import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image
} from "react-native";

export default function Home() {
	return (
		<View style={styles.container}>
			<View style={headerStyles.Header}>
				<Text style={styles.Text}>
					Seus projetos:
				</Text>
				<Botao type="green" text="+" style={headerStyles.AddButton} textStyle={headerStyles.AddButtonText}/>
				{/* <TouchableOpacity style={headerStyles.AddButton}>
					<Ionicons name="ios-add" size={40} />
				</TouchableOpacity> */}
			</View>
			<View style={styles.Body}>
				<View>
					<Projeto nome="Meu projeto" data="22/05/23"/>
					<Projeto nome="Meu Outro projeto" data="30/02/23"/>
					<Projeto nome="Projeto aquele outro" data="02/06/23"/>
				</View>
			</View>
		</View>
	);
}

const headerStyles = StyleSheet.create({
	Header: {
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#381535'
	},
	AddButton: {
		backgroundColor: '#51FF62',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 16,
		width: '40%',
		height: 50,
		margin: 8,
	},
	AddButtonText: {
		fontSize: 35
	}
});

const styles = StyleSheet.create({
	container: { 
		flex: 1,
		backgroundColor: "#67327A"
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
});
