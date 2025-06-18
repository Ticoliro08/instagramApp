import React from 'react'; 
// Importa o React para criar o componente funcional

import {
  Text,
  Image,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'; 
// Importa componentes básicos do React Native para a interface

import esfera from '../assets/icons/esfera.gif' 
// Importa uma imagem animada (gif) chamada esfera, usada na tela

export default function App({ navigation }) { 
  // Componente funcional principal da tela Home, recebe a prop navigation para navegação

  return (
    <ScrollView style={styles.body}> 
    {/* ScrollView para permitir rolagem vertical da tela */}

      <TouchableOpacity style={styles.sign} onPress={() => navigation.navigate('Sign in')}> 
      {/* Botão "Sign in" que, ao ser clicado, navega para a tela de login ("Sign in") */}

        <Text style={styles.signInText}>Sign in</Text> 
        {/* Texto dentro do botão */}
      </TouchableOpacity>

      <Image
        source={esfera} 
        style={{ width: '100%', height: 300 }} 
        // Exibe a imagem importada esfera, com largura total e altura fixa
      />

      <View style={styles.center}> 
      {/* Container centralizado para o texto e botão */}

        <Text style={styles.text}>
          Venha conhecer meu protótipo de Instagram usando React Native
        </Text> 
        {/* Texto de apresentação do app */}

        <TouchableOpacity onPress={() => navigation.navigate('cadastro')} style={styles.btn}> 
        {/* Botão "Cadastre-se" que navega para a tela de cadastro */}

          <Text style={styles.btnText}>Cadastre-se</Text> 
          {/* Texto dentro do botão */}
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
