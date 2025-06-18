import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  StatusBar,
  Platform,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [statusColor, setStatusColor] = useState('#f5f5f5');

  const handleLogin = () => {
    if (nome.trim() === '' || email.trim() === '' || senha === '') {
      setStatusColor('red');
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    setCarregando(true);
    setStatusColor('#0066cc');

    setTimeout(() => {
      setCarregando(false);
      setStatusColor('green');
      Alert.alert('Sucesso', `Bem-vindo, ${nome}!`);
      setNome('');
      setEmail('');
      setSenha('');
      navigation.navigate('Feed');
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: statusColor }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar backgroundColor={statusColor} barStyle="light-content" />

      <Text style={styles.title}>Vamos começar</Text>
      <Text style={styles.text}>Crie sua conta no nosso app</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        placeholderTextColor="#bab8b7"
        value={nome}
        onChangeText={setNome}
      />
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

      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={carregando}>
        {carregando ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Cadastrar</Text>
        )}
      </TouchableOpacity>

      <View style={styles.textSign}>
        <Text>Já tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign in')}>
          <Text style={styles.sign}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 8,
  },
  text: {
    marginBottom: 32,
    textAlign: 'left',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    color: '#000',
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textSign: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sign: {
    color: '#007AFF',
    fontWeight: '600',
    marginLeft: 4,
  },
});
