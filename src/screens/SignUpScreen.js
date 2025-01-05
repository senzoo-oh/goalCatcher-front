import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const handleSignUp = () => {
      if (email && password && nickname) {
        alert('회원가입이 완료되었습니다');
      } else {
        alert('모든 정보를 입력하세요');
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>회원가입</Text>

        <TextInput 
          style={styles.input} 
          placeholder="이메일"
          value={email}
          onChangeText={setEmail}
          />

        <TextInput 
          style={styles.input} 
          placeholder="닉네임"
          value={nickname}
          onChangeText={setNickname}
          />

        <TextInput 
          style={styles.input} 
          placeholder="비밀번호"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          />
        
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
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
      width: 300,
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