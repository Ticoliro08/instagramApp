// Importando os hooks useState e useEffect do React
import React, { useState, useEffect } from 'react';

// Importando os componentes visuais do React Native
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  RefreshControl, // Controle de "puxar para atualizar"
} from 'react-native';

// Importando o AsyncStorage para salvar e recuperar dados localmente
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importando os componentes de post e story que serão exibidos no feed
import Post from './Post';
import Story from './story';

// Importando as imagens das publicações
import Disney from '../assets/publi/disneyy.jpg';
import Praia from '../assets/publi/praia.png';
import Neymar from '../assets/publi/neymar.jpg';
import GuilhermePubli from '../assets/publi/guilhermePubli.jpg';
import LucasPubli from '../assets/publi/lucasPubli.jpeg';
import PietroPubli from '../assets/publi/pietroPubli.jpeg';
import VitorPubli from '../assets/publi/vitorPubli.jpeg';
import MatPubli from '../assets/publi/matPubli.jpeg';
import MuriloPubli from '../assets/publi/muriloPubli.jpeg';

// Importando as imagens de perfil dos usuários
import Karen from '../assets/perfil/karen.png';
import Parpinelli from '../assets/perfil/parpinelli.png';
import Guilherme from '../assets/perfil/guilherme.png';
import Gabriel from '../assets/perfil/gabriel.png';
import LucasPerfil from '../assets/perfil/lucasPerfil.jpeg';
import PietroPerfil from '../assets/perfil/pietroPerfil.jpeg';
import VitorPerfil from '../assets/perfil/vitorPerfil.jpeg';
import MatPerfil from '../assets/perfil/matPerfil.jpeg';
import MuriloPerfil from '../assets/perfil/muriloPerfil.jpeg';

// Componente principal do Feed
export default function FeedScreen({ navigation, isDarkMode }) {
  // Estado para armazenar os dados dos posts
  const [dados, setDados] = useState([]);

  // Estado para controlar se está atualizando (puxar para atualizar)
  const [atualizando, setAtualizando] = useState(false);

  // Função chamada ao puxar o feed para baixo (refresh)
  function aoAtualizar() {
    setAtualizando(true);
    setTimeout(() => {
      setAtualizando(false);
      alert("Atualizado com sucesso!"); // Simulando atualização
    }, 1500);
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#000' : '#fff', // Preto no dark mode, branco no normal
    },
  });

  // Array com os posts e dados dos usuários
  const posts = [
    {
      id: '1',
      usuario: 'Kay_.parpinelli',
      imagem: Praia,
      legenda: 'Photo library ',
      curtidas: 110,
      ftPerfil: Karen,
      bio: 'I have more phanes than the moon',
      seguidores: 561,
    },
    {
      id: '2',
      usuario: 'guih.sdl',
      imagem: GuilhermePubli,
      legenda: 'Uma vida com você é pouco...',
      curtidas: 96,
      ftPerfil: Guilherme,
      bio: 'Vinhedo-sp @kay_.parpinelli',
      seguidores: 365,
    },
    {
      id: '3',
      usuario: 'Gabriel',
      imagem: Neymar,
      legenda: 'Joguei demais! 🎮',
      curtidas: 7,
      ftPerfil: Gabriel,
      bio: 'O sucesso é uma jornada, não um destino.',
      seguidores: 278,
    },
    {
      id: '4',
      usuario: 'Parpinelli',
      imagem: Disney,
      legenda: 'Muito feliz! 🎮',
      curtidas: 11,
      ftPerfil: Parpinelli,
      bio: 'Cada dia é uma nova chance de recomeçar.',
      seguidores: 465,
    },
    {
      id: '5',
      usuario: 'pvd_marin',
      imagem: LucasPubli,
      legenda: '00s👑',
      curtidas: 20,
      ftPerfil: LucasPerfil,
      bio: 'Proverbios 4:23-27',
      seguidores: 73,
    },
    {
      id: '6',
      usuario: 'pietromelle',
      imagem: PietroPubli,
      legenda: '🏆🏎',
      curtidas: 47,
      ftPerfil: PietroPerfil,
      bio: 'Atleta',
      seguidores: 549,
    },
    {
      id: '7',
      usuario: 'vitorrgabriel_07',
      imagem: VitorPubli,
      legenda: 'parque de diversões',
      curtidas: 62,
      ftPerfil: VitorPerfil,
      bio: '',
      seguidores: 602,
    },
    {
      id: '8',
      usuario: 'matheus_dc_257',
      imagem: MatPubli,
      legenda: 'comemorando 3 anos de namoro, te amo lindona🥰😘',
      curtidas: 18,
      ftPerfil: MatPerfil,
      bio: 'alguém vivendo com a pessoa que ama. Maria Clara Cardoso Gomes Freire(amor)💜💚',
      seguidores: 27,
    },
    {
      id: '9',
      usuario: 'mu_correia',
      imagem: MuriloPubli,
      legenda: '',
      curtidas: 96,
      ftPerfil: MuriloPerfil,
      bio: '. @in.gridgibin',
      seguidores: 369,
    },
  ];

  // useEffect roda quando o componente é carregado
  useEffect(() => {
    // Função para salvar os posts no AsyncStorage
    const storePosts = async () => {
      try {
        await AsyncStorage.setItem('posts', JSON.stringify(posts)); // Salvando os posts
      } catch (error) {
        console.error('Erro ao armazenar os posts:', error);
      }
    };

    // Função para pegar os posts do AsyncStorage
    const getPosts = async () => {
      try {
        const storedPosts = await AsyncStorage.getItem('posts'); // Buscando
        if (storedPosts) {
          setDados(JSON.parse(storedPosts)); // Se achou, usa os salvos
        } else {
          setDados(posts); // Se não, usa os originais
        }
      } catch (error) {
        console.error('Erro ao recuperar os posts:', error);
      }
    };

    // Chama as duas funções ao abrir o app
    storePosts();
    getPosts();
  }, []);

  // Renderização da tela
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        // Configuração do "puxar para atualizar"
        <RefreshControl
          refreshing={atualizando}
          onRefresh={aoAtualizar}
          colors={["#0af"]} // Cor no Android
          tintColor="#0af" // Cor no iOS
          title="Puxando pra atualizar..."
        />
      }
    >

      {/* Lista de Stories no topo (scroll horizontal) */}
      <ScrollView horizontal>
        {dados.map((itemm) => (
          <View key={itemm.id}>
            <Story story={itemm} navigation={navigation} />
          </View>
        ))}
      </ScrollView>

      {/* Lista de Posts abaixo */}
      {dados.map((item) => (
        <View key={item.id}>
          <Post post={item} navigation={navigation} />
        </View>
      ))}

    </ScrollView>
  );
}
