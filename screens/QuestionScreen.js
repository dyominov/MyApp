import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const QuestionScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "Какая планета является самой близкой к Солнцу?",
      options: ["Меркурий", "Венера", "Марс", "Земля", "Юпитер", "Сатурн"],
      correctAnswerIndex: 0,
    },
    {
      question: "Какая планета является красной планетой?",
      options: ["Меркурий", "Венера", "Марс", "Земля", "Юпитер", "Сатурн"],
      correctAnswerIndex: 2,
    },
    {
      question: "Как называется самая большая планета Солнечной системы?",
      options: ["Меркурий", "Венера", "Марс", "Юпитер", "Сатурн", "Уран"],
      correctAnswerIndex: 3,
    },
  ];

  const handleAnswerPress = (answerIndex) => {
    if (answerIndex === questions[currentQuestionIndex].correctAnswerIndex) {
      setScore(score + 1);
    }
    if (currentQuestionIndex === questions.length - 1) {
      navigation.navigate("Result", { correctAnswers: score, totalQuestions: questions.length });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{questions[currentQuestionIndex].question}</Text>
      </View>
      <View style={styles.optionsContainer}>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswerPress(index)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  questionContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 24,
    textAlign: "center",
  },
  optionsContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ccc",
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
  },
  optionText: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default QuestionScreen;
