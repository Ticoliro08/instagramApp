// Importando o React e o hook useState
import React, { useState } from 'react';

// Importando os componentes básicos do React Native
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Função principal do componente Post
export default function Post({ post, navigation }) {
  // Estado que armazena se o post está curtido ou não
  const [curtido, setCurtido] = useState(false);

  // Estado que armazena o número de curtidas
  const [curtidas, setCurtidas] = useState(post.curtidas);

  // Função chamada quando o usuário clica no botão de curtir
  const handleLike = () => {
    if (curtido) {
      // Se já estiver curtido, diminui o número de curtidas
      setCurtidas(curtidas - 1);
    } else {
      // Se ainda não estiver curtido, aumenta o número de curtidas
      setCurtidas(curtidas + 1);
    }
    // Troca o estado de curtido (curtido vira falso ou verdadeiro)
    setCurtido(!curtido);
  };

  // Retorno do componente com a estrutura visual (JSX)
  return (
    // Container principal do post
    <View style={styles.container}>

      {/* Cabeçalho com a foto de perfil e nome do usuário */}
      <TouchableOpacity
        style={styles.header}
        onPress={() =>
          // Ao clicar no cabeçalho, navega para a tela de perfil
          navigation.navigate('Profile', {
            user: post, // Passa os dados do post como parâmetro
          })
        }
      >
        {/* Imagem de perfil do usuário */}
        <Image source={post.ftPerfil} style={styles.avatar} />

        {/* Nome de usuário */}
        <Text style={styles.username}>{post.usuario}</Text>
      </TouchableOpacity>

      {/* Imagem principal da publicação */}
      <Image source={post.imagem} style={styles.postImage} />

      {/* Legenda do post */}
      <Text style={styles.caption}>{post.legenda}</Text>

      {/* Área das curtidas */}
      <View style={styles.likesContainer}>
        {/* Botão de curtir */}
        <TouchableOpacity onPress={handleLike}>
          <Text style={styles.likeButton}>
            {/* Se o post estiver curtido, mostra um coração vermelho */}
            {curtido ? '❤️ Curtido' : '🤍 Curtir'}
          </Text>
        </TouchableOpacity>

        {/* Exibe a quantidade de curtidas */}
        <Text style={styles.likesCount}>{curtidas} curtidas</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    color: '#333',
  },
  postImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  caption: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: '#333',
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  likeButton: {
    color: '#e91e63',
    fontWeight: 'bold',
  },
  likesCount: {
    color: '#333',
  },
});
