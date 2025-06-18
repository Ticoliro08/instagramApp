// Importando os hooks do React
import React, { useState, useEffect } from 'react';

// Importando os componentes do React Native
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// Importando o AsyncStorage para armazenar e buscar dados locais
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importando a imagem de perfil padrão (caso o usuário ainda não tenha definido uma)
import PerfilPadrao from '../assets/perfil.png';

// Importando as imagens usadas nas publicações
import Disney from '../assets/publi/disneyy.jpg';
import Praia from '../assets/publi/praia.png';
import Neymar from '../assets/publi/neymar.jpg';
import GuilhermePubli from '../assets/publi/guilhermePubli.jpg';
import LucasPubli from '../assets/publi/lucasPubli.jpeg';
import PietroPubli from '../assets/publi/pietroPubli.jpeg';
import VitorPubli from '../assets/publi/vitorPubli.jpeg';
import MatPubli from '../assets/publi/matPubli.jpeg';
import MuriloPubli from '../assets/publi/muriloPubli.jpeg';

// Início do componente Profile
export default function Profile({ isDarkMode }) {
  // Estado para armazenar os posts carregados
  const [dados, setDados] = useState([]);

  // useEffect: Carrega os posts ao abrir a tela
  useEffect(() => {
    // Função para buscar os posts salvos
    const getPosts = async () => {
      try {
        const storedPosts = await AsyncStorage.getItem('posts');
        if (storedPosts) {
          setDados(JSON.parse(storedPosts)); // Se houver posts salvos, carrega
        }
      } catch (error) {
        console.error('Erro ao recuperar os posts:', error);
      }
    };

    getPosts();
  }, []);

  // Filtro: Pega só os posts do usuário atual
  const meusPosts = dados.filter((post) => post.usuario === 'guih.sdl');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: isDarkMode ? '#000' : '#fff', // Fundo preto se for dark mode
    },
    fotoPerfil: {
      width: 100,
      height: 100,
      borderRadius: 50,
      alignSelf: 'center',
      marginBottom: 16,
    },
    nome: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDarkMode ? '#fff' : '#000', // Cor da fonte conforme o tema
      textAlign: 'center',
    },
    bio: {
      fontSize: 14,
      color: isDarkMode ? '#aaa' : '#333',
      textAlign: 'center',
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: isDarkMode ? '#fff' : '#000',
      marginBottom: 8,
    },
    postImage: {
      width: '100%',
      height: 200,
      marginBottom: 16,
      borderRadius: 8,
    },
  });

  // Renderização da tela
  return (
    <ScrollView style={styles.container}>
      {/* Foto de perfil */}
      <Image source={PerfilPadrao} style={styles.fotoPerfil} />

      {/* Nome do usuário */}
      <Text style={styles.nome}>guih.sdl</Text>

      {/* Bio do usuário */}
      <Text style={styles.bio}>Vinhedo-sp @kay_.parpinelli</Text>

      {/* Título da seção de publicações */}
      <Text style={styles.sectionTitle}>Minhas publicações</Text>

      {/* Exibição dos posts do usuário */}
      {meusPosts.map((post) => (
        <Image key={post.id} source={post.imagem} style={styles.postImage} />
      ))}
    </ScrollView>
  );
}
