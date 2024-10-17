import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function Protected() {
  const [loading, setLoading] = useState(false);

  const handleSurveyRequest = async (surveyNumber) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://example.com/api/survey/${surveyNumber}`);
      Alert.alert(`Encuesta ${surveyNumber}`, `Resultado: ${response.data}`);
    } catch (error) {
      Alert.alert('Error', 'No se pudo cargar la encuesta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.successMessage}>¡Has ingresado correctamente!</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <TouchableOpacity style={styles.surveyButton} onPress={() => handleSurveyRequest(1)}>
            <Text style={styles.loginButtonText}>Encuesta 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.surveyButton} onPress={() => handleSurveyRequest(2)}>
            <Text style={styles.loginButtonText}>Encuesta 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.surveyButton} onPress={() => handleSurveyRequest(3)}>
            <Text style={styles.loginButtonText}>Encuesta 3</Text>
          </TouchableOpacity>
        </>
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
  successMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 30,
  },
  surveyButton: {
    backgroundColor: '#03a9f4',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
