// Importando o React e o hook useState para gerenciar estados no componente
import React, {useState} from 'react';

// Importando os componentes de navegação da biblioteca React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando o componente Switch para criar o botão de modo escuro/claro
import {Switch} from 'react-native';

// Importando as telas (screens) do aplicativo
import FeedScreen from './screens/FeedScreen';
import Profile from './screens/Profile';
import Mensagem from './screens/mensagem';
import Home from './screens/home';
import Cadastro from './screens/cadastro';
import Sign from './screens/sign';
import Post from './screens/Post';
import Story from './screens/story';
import Stories from './screens/stories';

// Importando um componente extra para busca (não usado no momento mas está incluso)
import SearchScreen from './components/SearchScreen'; 

// Criando o objeto de navegação tipo Stack (pilha de telas)
const Stack = createNativeStackNavigator();

// Função principal do app (componente App)
export default function App() {
  // Estado para controlar o modo escuro (Dark Mode)
  const [isEnabled, setIsEnabled] = useState(false);

  // Função que alterna o estado de isEnabled (ativa ou desativa o modo escuro)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // Opções padrão de estilo para os cabeçalhos das telas, com base no modo escuro/claro
  const screenOptions = {
    headerStyle: {
      backgroundColor: isEnabled ? '#000' : '#fff',  // Fundo do cabeçalho muda conforme o modo
    },
    headerTintColor: isEnabled ? '#fff' : '#000',    // Cor dos textos do cabeçalho
    contentStyle: {
      backgroundColor: isEnabled ? '#000' : '#fff',  // Fundo da tela inteira
    },
  };

  return (
    // Container principal da navegação (envolve todas as telas)
    <NavigationContainer>
      {/* Definindo o Stack Navigator com a tela inicial sendo o Home */}
      <Stack.Navigator initialRouteName="Home">
        
        {/* Tela Feed com opção de alternar o modo escuro no cabeçalho */}
        <Stack.Screen
          name="Feed"
          component={FeedScreen}
          options={() => ({
            ...screenOptions, // Aplicando o estilo dinâmico
            headerRight: () => (
              <>
                {/* Botão switch para ativar o dark mode */}
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
                {/* Passando o darkMode como props para a tela Feed */}
                {props => <FeedScreen {...props} isDarkMode={isEnabled} />}
              </>
            ),
          })}
        />

        {/* Tela de Perfil */}
        <Stack.Screen name="Profile" component={Profile} >
          {/* Passando o darkMode como props (se quisesse usar) */}
          { props => <Profile {...props} isDarkMode={isEnabled} /> }
        </Stack.Screen>

        {/* Outras telas (sem personalização extra no cabeçalho) */}
        <Stack.Screen name="mensagem" component={Mensagem} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="cadastro" component={Cadastro} />
        <Stack.Screen name="Sign in" component={Sign} />
        <Stack.Screen name="Story" component={Story} />
        <Stack.Screen name="Stories" component={Stories} />

        {/* Tela de Post (com possibilidade de passar o darkMode como props) */}
        <Stack.Screen name="post"  component={Post} >
          {props => <Post {...props} isDarkMode={isEnabled} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
