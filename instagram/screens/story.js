// Story.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Story({ story, navigation }) {
  return (
    <View>
    <TouchableOpacity
      onPress={() => navigation.navigate('Stories', { usar: story })}
    >
      {/* Foto de perfil e nome */}
      <View style={styles.header}>
        <Image source={story.ftPerfil} style={styles.avatar} />
        <Text style={styles.username}>{story.usuario}</Text>
      </View>
</TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
 
  header: {
    flexDirection: 'collum',
    alignItems: 'center',
    width: width * 0.6,
    padding: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth:2,
    borderColor:'#c93e76',
  },
  username: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },

});
