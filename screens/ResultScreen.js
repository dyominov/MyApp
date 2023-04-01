import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ResultScreen = ({route, navigation}) => {
    const {correctAnswers, totalQuestions} = route.params;

    const handleRestartPress = () => {
        navigation.navigate('Welcome');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Вы ответили правильно на {correctAnswers} из {totalQuestions} вопросов!</Text>
            <TouchableOpacity
                style={styles.restartButton}
                onPress={handleRestartPress}
            >
                <Text>Начать заново</Text>
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
    restartButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#ccc',
        borderRadius: 5,
    },
});

export default ResultScreen;
