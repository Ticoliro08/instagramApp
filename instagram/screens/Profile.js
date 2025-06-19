import React, { useState } from 'react'; 
// Importa React e o hook useState para controlar estados locais do componente

import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'; 
// Importa componentes básicos do React Native para construir a interface

export default function Profile({ route, navigation }) { 
  // Componente funcional Profile recebe as props 'route' e 'navigation' para acessar parâmetros e navegação

  const { user } = route.params; 
  // Extrai o objeto 'user' que foi passado na navegação para esta tela

  // Estado para controlar a quantidade de seguidores atuais
  const [seguidores, setSeguidores] = useState(user.seguidores);

  // Estado para controlar se o usuário está seguindo este perfil ou não
  const [seguindo, setSeguindo] = useState(false);

  // Função para alternar entre seguir e deixar de seguir o usuário
  const alternarSeguir = () => {
    if (seguindo) {
      // Se já está seguindo, diminui o número de seguidores
      setSeguidores(seguidores - 1);
    } else {
      // Se não está seguindo, aumenta o número de seguidores
      setSeguidores(seguidores + 1);
    }
    // Atualiza o estado 'seguindo' para o inverso do atual (toggle)
    setSeguindo(!seguindo);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Container com rolagem para o conteúdo do perfil */}

      <Image source={user.ftPerfil} style={styles.fotoPerfil} /> 
      {/* Exibe a foto de perfil do usuário */}

      <Text style={styles.nome}>{user.usuario}</Text> 
      {/* Exibe o nome de usuário */}

      <Text style={styles.bio}>{user.bio}</Text> 
      {/* Exibe a biografia do usuário */}

      <Text style={styles.seguidores}>{seguidores} seguidores</Text> 
      {/* Exibe o número atual de seguidores */}

      <View style={styles.botoes}> 
      {/* Container para os botões de seguir e enviar mensagem, alinhados na mesma linha */}

        <TouchableOpacity
          style={[styles.botaoSeguir, seguindo ? styles.botaoSeguindo : styles.botaoNaoSeguindo]} 
          onPress={alternarSeguir} 
          // Botão que chama a função para alternar o status de seguir ou não
        >
          <Text style={styles.textoBotao}>
            {seguindo ? 'Seguindo' : 'Seguir'} 
            {/* Texto do botão muda conforme estado */}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('mensagem', {
            usuario: user.usuario,
            ftPerfil: user.ftPerfil,
          })}
          style={styles.botaoMsg}
          // Botão que navega para a tela de mensagem passando usuário e foto de perfil
        >
          <Text style={styles.textobotaoMsg}>mensagem</Text>
        </TouchableOpacity>
      </View>

      <View>
      {/* Espaço reservado (sem conteúdo definido) */}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
 

  botoes:{

flexDirection:'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  fotoPerfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 12,
  },
  seguidores: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  botaoSeguir: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  botaoSeguindo: {
    backgroundColor: '#34C759',
  },
  botaoNaoSeguindo: {
    backgroundColor: '#007AFF',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: '600',
  },
  botaoMsg: {
    backgroundColor: '#ccc',
   paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
    marginLeft:20,
  },
  
});
