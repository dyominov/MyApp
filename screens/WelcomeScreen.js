import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    const handleStartPress = () => {
        navigation.navigate('Question');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Добро пожаловать в наше приложение!</Text>
            <TouchableOpacity
                style={styles.startButton}
                onPress={handleStartPress}
            >
                <Text>Начать тест</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    startButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#ccc',
        borderRadius: 5,
    },
});

export default WelcomeScreen;
