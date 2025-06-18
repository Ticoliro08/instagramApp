import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Post({ post, onCurtir, navigation, isDarkMode }) {
  const [curtidas, setCurtidas] = useState(post.curtidas);
  const [curtido, setCurtido] = useState(false);
  const [mostrarComentarios, setMostrarComentarios] = useState(false);
  const [comentarioTexto, setComentarioTexto] = useState('');
  const [comentarios, setComentarios] = useState([]);

  const curtirPost = () => {
    if (!curtido) {
      setCurtidas(curtidas + 1);
      setCurtido(true);
      if (onCurtir) onCurtir(post.id);
    } else {
      setCurtidas(curtidas - 1);
      setCurtido(false);
    }
  };

  const alternarComentarios = () => {
    setMostrarComentarios(!mostrarComentarios);
  };

  const enviarComentario = () => {
    const texto = comentarioTexto.trim();
    if (texto === '') return;
    setComentarios([...comentarios, texto]);
    setComentarioTexto('');
  };

  return (
    <View style={[styles.card, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      {/* Nome do usuário */}
      <TouchableOpacity onPress={() => navigation.navigate('Profile', { user: post })} style={styles.perfil}>
        <Image source={post.ftPerfil} style={styles.ftperfil} />
        <Text style={[styles.usuario, { color: isDarkMode ? '#fff' : '#000' }]}>{post.usuario}</Text>
      </TouchableOpacity>

      {/* Imagem do post */}
      <Image source={post.imagem} style={styles.imagem} />

      {/* Legenda */}
      <Text style={[styles.legenda, { color: isDarkMode ? '#ccc' : '#333' }]}>{post.legenda}</Text>

      {/* Botões */}
      <View style={styles.botoes}>
        <TouchableOpacity onPress={curtirPost} style={styles.botaoCurtida}>
          <AntDesign name={curtido ? 'heart' : 'hearto'} size={24} color={curtido ? 'red' : '#000'} />
          <Text style={[styles.curtidas, { color: isDarkMode ? '#fff' : '#000' }]}>{curtidas} curtidas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={alternarComentarios} style={styles.botaoComentario}>
          <AntDesign name="message1" size={24} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>

      {/* Comentários */}
      {mostrarComentarios && (
        <View style={styles.blocoComentarios}>
          {comentarios.length === 0 ? (
            <Text style={styles.comentario}>Nenhum comentário ainda.</Text>
          ) : (
            comentarios.map((msg, index) => (
              <Text key={index} style={styles.comentario}>Você: {msg}</Text>
            ))
          )}

          {/* Input e envio */}
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ width: '100%' }}
          >
            <TextInput
              style={styles.input}
              value={comentarioTexto}
              onChangeText={setComentarioTexto}
              placeholder="Digite seu comentário"
              placeholderTextColor="#999"
            />

            <TouchableOpacity style={styles.botaoEnviar} onPress={enviarComentario}>
              <Text style={styles.textoBotao}>Enviar</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  perfil: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ftperfil: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#999',
  },
  usuario: {
    fontWeight: '600',
    fontSize: 16,
  },
  imagem: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  legenda: {
    fontSize: 14,
    lineHeight: 18,
  },
  botoes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  botaoCurtida: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  botaoComentario: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    marginLeft: 20,
  },
  curtidas: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '500',
  },
  blocoComentarios: {
    marginTop: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
  comentario: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  botaoEnviar: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: '600',
  },
});
