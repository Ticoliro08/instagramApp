import React, { useState } from 'react'; 
// Importa React e o hook useState para controlar estados no componente

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'; 
// Importa componentes do React Native para criar a interface e interagir com o usuário

export default function LoginScreen({ navigation }) { 
  // Define o componente funcional LoginScreen, que recebe a prop navigation para navegação entre telas

  const [email, setEmail] = useState(''); 
  // Declara um estado 'email' para armazenar o texto digitado no campo email, inicialmente vazio

  const [senha, setSenha] = useState(''); 
  // Declara um estado 'senha' para armazenar o texto digitado no campo senha, inicialmente vazio

  const handleLogin = () => { 
    // Função chamada ao pressionar o botão "Entrar", para validar e processar o login

    if(email.trim() === '' || senha.trim() === ''){ 
      // Verifica se algum dos campos está vazio (removendo espaços com trim)

      Alert.alert('Erro', 'Preencha todos os campos') 
      // Exibe um alerta informando que é preciso preencher todos os campos

    } else {
      // Se os campos estiverem preenchidos, verifica se o email e senha batem com os valores fixos

      if (email.trim() === 'guilherme@gmail.com' && senha === '12345') { 
        // Confere se o email é "guilherme@gmail.com" e a senha é "12345"

        Alert.alert('Sucesso', 'Bem-vindo de volta, Mestre!'); 
        // Exibe alerta de sucesso

        navigation.navigate('Feed') 
        // Navega para a tela "Feed"

      } else {
        Alert.alert('Erro', 'Email ou senha incorretos.'); 
        // Se os dados não baterem, exibe mensagem de erro
      }
    }
  };

  return (
    <View style={styles.container}> 
    {/* Container principal da tela */}

      <Text style={styles.title}>Entre na sua conta</Text> 
      {/* Título da tela */}

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#bab8b7"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail} 
        // Campo para o usuário digitar o email. Atualiza o estado 'email' a cada mudança.
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#bab8b7"
        secureTextEntry 
        // Oculta o texto digitado (senha)
        value={senha}
        onChangeText={setSenha} 
        // Atualiza o estado 'senha' conforme usuário digita
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}> 
      {/* Botão para tentar o login, chama a função handleLogin ao ser pressionado */}
        <Text style={styles.buttonText}>Entrar</Text> 
        {/* Texto do botão */}
      </TouchableOpacity>

      <View style={styles.textSign}> 
      {/* Área com texto para ir à tela de cadastro */}
        <Text>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('cadastro')}> 
        {/* Navega para a tela "cadastro" */}
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
