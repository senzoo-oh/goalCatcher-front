import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';


import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import GoalSettingScreen from '../screens/GoalSettingScreen';
import MyPageScreen from '../screens/MyPageScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    const { isLoggedIn } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions = {{ headerShown: false }}>
                {
                isLoggedIn ? (
                    <Stack.Screen name="Home" component={HomeScreen} />
                ) : (
                    <Stack.Screen name="Login" component={LoginScreen} />
                )
                }
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="SetGoal" component={GoalSettingScreen} />
                <Stack.Screen name="MyPage" component={MyPageScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;