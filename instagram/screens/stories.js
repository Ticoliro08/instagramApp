import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function UsarStory({ navigation, route }) {
  const { usar } = route.params;

  return (
    <View style={styles.container}>
    <View style={styles.storyCard} > 
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile', { user: usar })}
        
      >
        {/* Cabeçalho com perfil */}
        <View style={styles.header}>
          <Image source={usar.ftPerfil} style={styles.avatar} />
          <Text style={styles.username}>{usar.usuario}</Text>
        </View>
              </TouchableOpacity>


        {/* Imagem da publicação */}
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
