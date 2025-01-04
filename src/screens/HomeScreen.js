import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import FooterNav from '../components/FooterNav';

const HomeScreen = () => {
    const navigation = useNavigation();

    const goals = [
        { id: '1', text: '25KG 감량하기' },
        { id: '2', text: '하루 10분 독서' },
        { id: '3', text: '일기쓰기' },
        { id: '4', text: '하체 스트레칭 20분' },
        { id: '5', text: '물 2L 마시기' },
        { id: '6', text: '요가 30분' },
        { id: '7', text: '5km 달리기' },
    ];

    const renderGoal = ({item}) => (
        <View style={styles.goalCard}>
            <Text style={styles.goalText}>목표 {item.id}</Text>
            <Text style={styles.goalContent}> {item.text}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.goalButton}
            onPress={() => navigation.navigate('SetGoal')}>
            <Text style={styles.buttonText}>새로운 목표 설정</Text>
            </TouchableOpacity>
            
            
            <View style={styles.goalView}>
                <FlatList
                    data={goals}
                    keyExtractor={(item) => item.id}
                    renderItem={renderGoal}
                    contentContainerStyle={styles.goalList}
                />
            </View>
            
            <FooterNav/>
            
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  goalList: {
    marginTop: 5,
    
    width: 250,

    alignItems: 'center',
    backgroundColor: '#FFF',
  },

  goalView: {
    height: '65%',

    borderWidth: 2, // 테두리 두께
    borderColor: '#A2A2A2', // 테두리 색상
    borderRadius: 8, // 테두리 둥글기
  },
  goalCard: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,

    borderRadius: 8,
    marginBottom: 10,
    
    width: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  goalText: {
    fontSize: 14,
    color: '#6C757D',
    marginBottom: 5,
  },
  goalContent: {
    fontSize: 16,
    color: '#343A40',
    fontWeight: 'bold',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  goalButton: {
    alignItems: 'center',
    
    paddingVertical: 12,

    position: 'absolute',
    top: 50,
    
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

export default HomeScreen;
