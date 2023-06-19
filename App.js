import { StyleSheet, View } from 'react-native';

import BemVindo from './source/bemVindo';
import Loja from './source/Loja.jsx';
import RegistroLoja from './source/registroLoja.jsx';
import RegistroUsuario from './source/registroUsuario.jsx';
import Login from './source/loginUsuario.jsx';
import Home from './source/home.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
