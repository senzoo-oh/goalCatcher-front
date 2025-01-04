import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>회원가입</Text>

        <TextInput style={styles.input} placeholder="이메일" />
        <TextInput style={styles.input} placeholder="닉네임" />
        <TextInput style={styles.input} placeholder="비밀번호" secureTextEntry />
        
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#f8f9fa',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
      backgroundColor: '#fff',
    },
    signUpButton: {
        backgroundColor: '#0064B1',
        paddingVertical: 12,
        alignItems: 'center',
        width: '40%',
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
export default SignUpScreen;