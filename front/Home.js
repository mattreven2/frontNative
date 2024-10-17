import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

export default function Home({ navigation }) {
  // Obtener las dimensiones de la pantalla
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>

      
      <Image
        source={{ uri: 'https://media.istockphoto.com/id/1303877287/es/vector/lista-de-verificaci%C3%B3n-de-papel-y-pictograma-plano-l%C3%A1piz.jpg?s=612x612&w=0&k=20&c=hQYGjkR8CBZEElNgfOOSb4xF5o9rPPcaITEev-7ZTQI=' }}  // Coloca aquí la URL de tu imagen
        style={[styles.image, { maxWidth: width - 40 }]}  // Limitar el tamaño de la imagen a la pantalla
        resizeMode="contain"  // Asegurar que la imagen se ajuste dentro de los límites sin distorsionarse
      />

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('login')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
    borderRadius: 10,
    // Límites adicionales
    maxWidth: '100%',  // Limitar a la pantalla
    maxHeight: 300,    // Limitar altura máxima
  },
  loginButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
