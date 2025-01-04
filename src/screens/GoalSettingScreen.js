import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import FooterNav from '../components/FooterNav';

const GoalSettingScreen = () => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [text, setText] = useState('');

    const handleAddGoal = () => {
        alert('새로운 목표 추가 버튼 클릭!');
    };

    useEffect(() => {
        // 키보드가 나타날 때 상태 업데이트
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
        // 키보드가 사라질 때 상태 업데이트
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

        // 이벤트 리스너 해제
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            
            <TextInput
                style={styles.input} // 스타일
                placeholder="새로운 목표를 입력하세요" // 입력창에 힌트 표시
                value={text} // 상태로 관리되는 값
                onChangeText={(value) => setText(value)} // 입력 값 변경 시 호출
            />
            
            <TouchableOpacity
                style={styles.goalButton}
                onPress={handleAddGoal}>
                <Text style={styles.buttonText}>새로운 목표 설정</Text>
            </TouchableOpacity>

            {!isKeyboardVisible && <FooterNav />}

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
    },

    input: {
        marginTop: 200,
        width: '70%',
        
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        
        backgroundColor: '#fff',
    },
    
    goalButton: {
        marginTop: 30,
        paddingVertical: 12,
        alignItems: 'center',
        width: '40%',

        borderRadius: 25,
        backgroundColor: '#0064B1',
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    
    buttonText: {
        color: '#FFF',
        fontSize: 13,
        fontWeight: 'bold',
    },
});

export default GoalSettingScreen;