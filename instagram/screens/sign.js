import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if(email.trim() === '' || senha.trim() === ''){
      Alert.alert('Erro', 'Preencha todos os campos')
    }
    else{
    if (email.trim() === 'guilherme@gmail.com' && senha === '12345') {
      Alert.alert('Sucesso', 'Bem-vindo de volta, Mestre!');
      navigation.navigate('Feed')
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos.');
    }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entre na sua conta</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#bab8b7"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#bab8b7"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.textSign}>
        <Text>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('cadastro')}>
          <Text style={styles.sign}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  textSign: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sign: {
    color: '#479f3a',
    fontFamily: 'Verdana',
  },
});
