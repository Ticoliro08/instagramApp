import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Switch, StyleSheet} from 'react-native';

// pages
import FeedScreen from './screens/FeedScreen';
import Profile from './screens/Profile';
import Mensagem from './screens/mensagem';
import Home from './screens/home'
import Cadastro from './screens/cadastro'
import Sign from './screens/sign'
import Post from './screens/Post'
import Story from './screens/story'
import Stories from './screens/stories'

import SearchScreen from './components/SearchScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const screenOptions = {
    headerStyle: {
      backgroundColor: isEnabled ? '#000' : '#fff',
    },
    headerTintColor: isEnabled ? '#fff' : '#000',
    contentStyle: {
      backgroundColor: isEnabled ? '#000' : '#fff',
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen
          name="Feed"
          component={FeedScreen}
          options={() => ({
            ...screenOptions,
            headerRight: () => (
              <>
            
               <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        
          {props => <FeedScreen {...props} isDarkMode={isEnabled} />}

        </>
            ),
          })}
        />
        <Stack.Screen name="Profile" component={Profile} >

          { props => <Profile {...props} isDarkMode={isEnabled} /> }

        </Stack.Screen>
        <Stack.Screen name="mensagem" component={Mensagem} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="cadastro" component={Cadastro} />
        <Stack.Screen name="Sign in" component={Sign} />
        <Stack.Screen name="Story" component={Story} />
        <Stack.Screen name="Stories" component={Stories} />

        
        <Stack.Screen name="post"  component={Post} >
          {props => <Post {...props} isDarkMode={isEnabled} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

