import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image, ActivityIndicator, Modal } from 'react-native';
import FooterNav from '../components/FooterNav';

import { fetchUser } from '../mock/userMockData';
import { fetchFriendList } from '../mock/friendListMockData';

const MyPage = () => {

    const [friendRequests, setFriendRequests] = useState([
        { id: '1', nickname: 'goalCatcher1' },
        { id: '2', nickname: 'goalCatcher2' },
        { id: '3', nickname: 'goalCatcher3' },
    ]);
    
    const [userData, setUserData] = useState(null);
    const [friends, setFriends] = useState(null);
    const [friendRequest, setFriendRequest] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const [user, friendList] = await Promise.all([fetchUser(), fetchFriendList()]);

                console.log(user);
                console.log(friendList);

                setUserData(user);
                setFriends(friendList);
            } catch (error) {
                console.error('데이터 로드 중 오류:', error);
            } finally {
                setLoading(false); // 로딩 상태 해제
            }
        };

        loadData();
    }, []);
    

    const handleSendRequest = () => {
        if (friendRequest.trim() !== '') {
        alert(`${friendRequest}님에게 친구 요청을 보냈습니다.`);
        setFriendRequest('');
        } else {
        alert('친구 이름을 입력해주세요.');
        }
    };

    const renderFriendRequest = ({ item }) => (
        <View style={styles.requestCard}>
            <Image source={require('../styles/images/userIcon.png')} style={styles.profileImage} />
            <View style={styles.requestInfo}>
                <Text style={styles.nickname}>{item.nickname}님</Text>
                <View style={styles.requestButtons}>
                    <TouchableOpacity style={styles.acceptButton}>
                        <Text style={styles.buttonText}>수락</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton}>
                        <Text style={styles.buttonText}>삭제</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    const renderFriend = ({ item }) => (
        <View style={styles.friendItem}>
            <Text style={styles.friendText}>{item.nickname}</Text>
        </View>
    );

    if (loading) {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0064B1" />
            <Text>데이터를 불러오는 중입니다...</Text>
          </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                source={require('../styles/images/userIcon.png')}
                style={styles.profileImage}/>
                <View>
                    <Text style={styles.nickname}> {userData?.nickname} 님</Text>
                    <TouchableOpacity 
                        style={styles.requestButton}
                        onPress={() => setModalVisible(true)}>
                        <Text style={styles.buttonText}>친구 요청 목록</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.friendRequestContainer}>
                <TextInput
                style={styles.input}
                placeholder="친구 이름 입력"
                value={friendRequest}
                onChangeText={(value) => setFriendRequest(value)}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSendRequest}>
                <Text style={styles.buttonText}>요청 보내기</Text>
                </TouchableOpacity>
            </View>
        
            <View style={styles.friendListContainer}>
                <Text style={styles.friendListTitle}>친구목록</Text>
                <FlatList
                data={friends}
                keyExtractor={(item) => item.nickname}
                renderItem={renderFriend}/>
            </View>
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <FlatList
                        data={friendRequests}
                        keyExtractor={(item) => item.id}
                        renderItem={renderFriendRequest}/>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                        <Text style={styles.buttonText}>닫기</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <FooterNav />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingHorizontal: 40,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
    },
    nickname: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    requestButton: {
        backgroundColor: '#0064B1',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
    },
    friendRequestContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginRight: 8,
        backgroundColor: '#fff',
    },
    sendButton: {
        backgroundColor: '#0064B1',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    friendListContainer: {
        flex: 0.75,
        
        padding: 16,
        marginBottom: 20,

        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    friendListTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    friendItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    friendText: {
        fontSize: 14,
    },

    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    requestCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    requestInfo: {
        flex: 1,
    },
    requestButtons: {
        flexDirection: 'row',
        marginTop: 5,
    },
    acceptButton: {
        backgroundColor: '#0064B1',
        padding: 6,
        borderRadius: 8,
        marginRight: 10,
    },
    deleteButton: {
        backgroundColor: '#D9534F',
        padding: 6,
        borderRadius: 8,
    },
    closeButton: {
        backgroundColor: '#0064B1',
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center',
    },
});

export default MyPage;
