// Importando React e o hook useState
import React, { useState } from 'react';

// Importando componentes do React Native
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

// Função principal do componente Cadastro (LoginScreen é o nome que você usou, mas na verdade representa o cadastro)
export default function LoginScreen({ navigation }) {
  // Criando estados para armazenar o nome, e-mail, senha, status de carregamento e a cor de fundo da tela
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [statusColor, setStatusColor] = useState('#f5f5f5');

  // Função que será chamada ao clicar no botão "Cadastrar"
  const handleLogin = () => {
    // Verifica se algum campo está vazio
    if (nome.trim() === '' || email.trim() === '' || senha === '') {
      // Se estiver, altera a cor da tela e exibe alerta de erro
      setStatusColor('red');
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    // Se todos os campos estiverem preenchidos, inicia o carregamento
    setCarregando(true);
    // Muda a cor de fundo para azul enquanto carrega
    setStatusColor('#0066cc');

    // Simula um tempo de processamento (2 segundos)
    setTimeout(() => {
      // Finaliza o carregamento
      setCarregando(false);
      // Muda a cor de fundo para verde indicando sucesso
      setStatusColor('green');
      // Exibe alerta de sucesso com o nome do usuário
      Alert.alert('Sucesso', `Bem-vindo, ${nome}!`);

      // Limpa os campos
      setNome('');
      setEmail('');
      setSenha('');

      // Navega de volta para o Feed
      navigation.navigate('Feed');
    }, 2000);
  };

  return (
    // View que ajusta o teclado para não cobrir os campos de input
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: statusColor }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Barra de status com a cor de fundo da tela */}
      <StatusBar backgroundColor={statusColor} barStyle="light-content" />

      {/* Título da tela */}
      <Text style={styles.title}>Vamos começar</Text>
      {/* Subtítulo */}
      <Text style={styles.text}>Crie sua conta no nosso app</Text>

      {/* Campo de input para o nome */}
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        placeholderTextColor="#bab8b7"
        value={nome}
        onChangeText={setNome}
      />

      {/* Campo de input para o e-mail */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#bab8b7"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Campo de input para a senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#bab8b7"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Botão de cadastro */}
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={carregando}>
        {carregando ? (
          // Enquanto estiver carregando, mostra o indicador de carregamento
          <ActivityIndicator color="#fff" />
        ) : (
          // Caso contrário, mostra o texto do botão
          <Text style={styles.buttonText}>Cadastrar</Text>
        )}
      </TouchableOpacity>

      {/* Texto com link para fazer login caso já tenha conta */}
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
