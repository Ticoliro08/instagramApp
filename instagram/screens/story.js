// Importando o React
import React from 'react';

// Importando os componentes básicos do React Native
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

// Pegando a largura da tela do dispositivo
const { width } = Dimensions.get('window');

// Função principal do componente Story
export default function Story({ story, navigation }) {
  return (
    // Container principal
    <View>

      {/* Área clicável: quando o usuário tocar, vai para a tela de Stories */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Stories', { usar: story })}
      >

        {/* Bloco que mostra a foto de perfil e o nome do usuário */}
        <View style={styles.header}>
          {/* Foto de perfil */}
          <Image source={story.ftPerfil} style={styles.avatar} />

          {/* Nome do usuário */}
          <Text style={styles.username}>{story.usuario}</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'collumn',  
    alignItems: 'center',
    width: width * 0.6,
    padding: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#c93e76',
  },
  username: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
