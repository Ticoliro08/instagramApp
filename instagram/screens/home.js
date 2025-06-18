import React from 'react';
import {
  Text,
  Image,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import esfera from '../assets/icons/esfera.gif'
export default function App({ navigation }) {
  return (
    <ScrollView style={styles.body}>
      <TouchableOpacity style={styles.sign} onPress={() => navigation.navigate('Sign in')}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>

      <Image
        source={esfera} 
        style={{ width: '100%', height: 300 }}
      />

      <View style={styles.center}>
        <Text style={styles.text}>
          Venha conhecer meu protótipo de Instagram usando React Native
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('cadastro')} style={styles.btn}>
          <Text style={styles.btnText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#e9e4e9',
  },
  sign: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  signInText: {
    color: '#479f3a',
    fontSize: 15,
  },
  center: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
  },
  btn: {
    backgroundColor: '#c6c6e2',
    width: 150,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
