// Importando React
import React from 'react';

// Importando componentes do React Native
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

// Pegando a largura da tela para usar nos estilos
const { width } = Dimensions.get('window');

// Função principal do componente, chamada UsarStory
export default function UsarStory({ navigation, route }) {
  // Pegando os parâmetros recebidos da rota (neste caso, os dados do story clicado)
  const { usar } = route.params;

  return (
    // Container principal da tela
    <View style={styles.container}>
      
      {/* Cartão onde vai ficar o conteúdo da story */}
      <View style={styles.storyCard}>

        {/* Tornando o cabeçalho clicável, ao clicar o usuário vai para a tela de Profile */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile', { user: usar })}
        >
          {/* Cabeçalho com imagem de perfil e nome do usuário */}
          <View style={styles.header}>
            <Image source={usar.ftPerfil} style={styles.avatar} />
            <Text style={styles.username}>{usar.usuario}</Text>
          </View>
        </TouchableOpacity>

        {/* Exibição da imagem principal da story */}
        <Image source={usar.imagem} style={styles.storyImage} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyCard: {
    width: width * 0.8,
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  storyImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
});
