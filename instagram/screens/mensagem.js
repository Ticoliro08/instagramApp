// Importando o React e o hook useState
import React, { useState } from 'react';

// Importando componentes básicos do React Native
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

// Função principal do componente Mensagem
export default function Mensagem({ route, navigation }) {
  // Pegando os dados recebidos por navegação (nome do usuário e foto de perfil)
  const { usuario, ftPerfil } = route.params;

  // Estado para armazenar o texto da mensagem que o usuário está digitando
  const [mensagem, setMensagem] = useState('');

  // Estado para armazenar todas as mensagens enviadas
  const [mensagensEnviadas, setMensagensEnviadas] = useState([]);

  // Função chamada ao clicar no botão "Enviar"
  const enviarMensagem = () => {
    // Se o campo de mensagem estiver vazio, não faz nada
    if (mensagem.trim() === '') return;

    // Adiciona a nova mensagem na lista de mensagens enviadas
    setMensagensEnviadas([...mensagensEnviadas, mensagem]);

    // Limpa o campo de input após o envio
    setMensagem('');
  };

  return (
    // ScrollView para permitir rolagem caso o conteúdo fique longo
    <ScrollView style={styles.container}>

      {/* Bloco do perfil do usuário (foto e nome) */}
      <View style={styles.blocoPerfil}>
        {/* Foto de perfil */}
        <Image source={ftPerfil} style={styles.fotoPerfil} />

        {/* Nome do usuário */}
        <Text style={styles.nome}>{usuario}</Text>
      </View>

      {/* Lista de mensagens enviadas */}
      <View style={styles.listaMensagens}>
        {mensagensEnviadas.length === 0 ? (
          // Se ainda não houver mensagens enviadas
          <Text style={styles.mensagemItem}>Nenhuma mensagem ainda.</Text>
        ) : (
          // Exibe cada mensagem enviada
          mensagensEnviadas.map((msg, index) => (
            <Text key={index} style={styles.mensagemItem}>
              Você: {msg}
            </Text>
          ))
        )}
      </View>

      {/* Bloco com o campo de texto e o botão de enviar */}
      <View style={styles.bloco}>

        {/* Campo de input para o usuário digitar a mensagem */}
        <TextInput
          style={styles.input}
          value={mensagem}
          onChangeText={setMensagem}
          placeholder="Digite sua mensagem"
          placeholderTextColor="#aaa"
        />

        {/* Botão de envio */}
        <TouchableOpacity style={styles.botaoEnviar} onPress={enviarMensagem}>
          <Text style={styles.textoBotao}>Enviar</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 60,
  },
  blocoPerfil: {
    alignItems: 'center',
    marginBottom: 20,
  },
  fotoPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#4CAF50',
    marginBottom: 10,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  voltar: {
    color: '#2196F3',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listaMensagens: {
    marginTop: 20,
    width: '100%',
  },
  mensagemItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginVertical: 6,
    marginHorizontal: 5,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    color: '#333',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  bloco: {
    marginTop: 30,
    alignItems: 'center',
    width: '100%',
  },
  input: {
    width: '90%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 12,
    fontSize: 16,
    color: '#333',
  },
  botaoEnviar: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
