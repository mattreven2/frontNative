import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import api from '../services/api';  // Importa axios configurado con la URL base de los microservicios

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Solicitud POST al microservicio de autenticación
      const response = await api.post('/auth/login', { email, password });
      const { accessToken, refreshToken } = response.data;  // Obtener los tokens desde la respuesta

      // Guardar tokens en almacenamiento local (puedes usar AsyncStorage, por ejemplo)
      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);

      Alert.alert('Éxito', 'Has iniciado sesión correctamente');
      navigation.navigate('protected');  // Navegar a la pantalla protegida después del login exitoso
    } catch (error) {
      Alert.alert('Error', 'Login fallido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      {/* Texto "Correo" encima del campo de correo */}
      <Text style={styles.label}>Correo</Text>
      <TextInput
        style={styles.input}
        placeholder="nombre.apellido@alumnos.ucn.cl"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      {loading ? (
        <ActivityIndicator size="large" color="#6200ee" />
      ) : (
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Confirmar</Text>
        </TouchableOpacity>
      )}
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
  label: {
    fontSize: 18,
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
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
