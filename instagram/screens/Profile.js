import React, { useState } from 'react';
import { ScrollView,View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Profile({ route, navigation }) {
  const { user } = route.params;

  // Estado de seguidores e seguindo
  const [seguidores, setSeguidores] = useState(user.seguidores);
  const [seguindo, setSeguindo] = useState(false);

  const alternarSeguir = () => {
    if (seguindo) {
      setSeguidores(seguidores - 1);
    } else {
      setSeguidores(seguidores + 1);
    }
    setSeguindo(!seguindo);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Foto de perfil */}
      <Image source={user.ftPerfil} style={styles.fotoPerfil} />

      {/* Nome do usuário */}
      <Text style={styles.nome}>{user.usuario}</Text>

      {/* Bio */}
      <Text style={styles.bio}>{user.bio}</Text>

      {/* Seguidores */}
      <Text style={styles.seguidores}>{seguidores} seguidores</Text>
<View style={styles.botoes}> 
      {/* Botão Seguir/Seguindo */}
      <TouchableOpacity
        style={[styles.botaoSeguir, seguindo ? styles.botaoSeguindo : styles.botaoNaoSeguindo]}
        onPress={alternarSeguir}
      >


        <Text style={styles.textoBotao}>
          {seguindo ? 'Seguindo' : 'Seguir'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('mensagem', {
  usuario: user.usuario,
  ftPerfil: user.ftPerfil,
})}
 style={styles.botaoMsg}>
        <Text style={styles.textobotaoMsg}>mensagem</Text>
      </TouchableOpacity>
      </View>

<View>





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
