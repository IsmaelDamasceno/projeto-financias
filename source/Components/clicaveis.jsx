import { TouchableOpacity, Text, Alert} from 'react-native';
import { StyleSheet } from "react-native";

// #region Botão
export function Botao(props) {
    switch(props.type) {
        case "purple": {
            return (
                <TouchableOpacity onPress={props.onPress} style={(props.style !== undefined)? props.style: btnStyles.purpleButton}>
                    <Text style={props.textStyle !== undefined? props.textStyle: btnStyles.purpleTextButton}>{props.text}</Text>
                </TouchableOpacity>
            );
        }break;
        case "green": {
            return (
                <TouchableOpacity onPress={props.onPress} style={(props.style !== undefined)? props.style: btnStyles.greenButton}>
                    <Text style={props.textStyle !== undefined? props.textStyle: btnStyles.greenTextButton}>{props.text}</Text>
                </TouchableOpacity>
            );
        }break;
        default: {
            Alert.alert("Invalid button type!");
        }break;
    }
    
}

const btnStyles = StyleSheet.create({
    greenButton: {
        backgroundColor: '#51FF62',
        width: 190,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8
    },
    greenTextButton: {
        color: "#67327A",
        fontSize: 25,
    },
    
    purpleButton: {
        backgroundColor: '#67327A',
        width: 190,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8
    },
    purpleTextButton: {
        color: "#FFFFFF",
        fontSize: 25,
    },
});
// #endregion

// #region Hyperlink
export function Hyperlink(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={props.textStyle !== undefined? props.textStyle: hplStyles.Text}>{props.text}</Text>
        </TouchableOpacity>
    );
}
const hplStyles = StyleSheet.create({
    Text: {
        color: '#AAD1FF',
        fontSize: 25,
        textDecorationLine: 'underline',
    }
})
// #endregion
