import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function Mensagem({ route, navigation }) {
  const { usuario, ftPerfil } = route.params; // Recebendo os dados do perfil

  const [mensagem, setMensagem] = useState('');
  const [mensagensEnviadas, setMensagensEnviadas] = useState([]);

  const enviarMensagem = () => {
    if (mensagem.trim() === '') return;
    setMensagensEnviadas([...mensagensEnviadas, mensagem]);
    setMensagem('');
  };

  return (
    <ScrollView style={styles.container}>
    

      <View style={styles.blocoPerfil}>
        <Image source={ftPerfil} style={styles.fotoPerfil} />
        <Text style={styles.nome}>{usuario}</Text>
      </View>

      {/* Lista de mensagens enviadas */}
      <View style={styles.listaMensagens}>
        {mensagensEnviadas.length === 0 ? (
          <Text style={styles.mensagemItem}>Nenhuma mensagem ainda.</Text>
        ) : (
          mensagensEnviadas.map((msg, index) => (
            <Text key={index} style={styles.mensagemItem}>
              Você: {msg}
            </Text>
          ))
        )}
      </View>

      <View style={styles.bloco}>
        <TextInput
          style={styles.input}
          value={mensagem}
          onChangeText={setMensagem}
          placeholder="Digite sua mensagem"
          placeholderTextColor="#aaa"
        />

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
