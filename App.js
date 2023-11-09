import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '='];

  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  function calculator() {
    const splitNumbers = currentNumber.split(' ');
    const firstNumber = parseFloat(splitNumbers[0]);
    const secondNumber = parseFloat(splitNumbers[2]);
    const operator = splitNumbers[1];

    switch (operator) {
      case '+':
        setCurrentNumber((firstNumber + secondNumber).toString());
        return;
      case '-':
        setCurrentNumber((firstNumber - secondNumber).toString());
        return;
      case '*':
        setCurrentNumber((firstNumber * secondNumber).toString());
        return;
      case '/':
        setCurrentNumber((firstNumber / secondNumber).toString());
        return;
    }
  }

  function handleInput(buttonPressed) {
    if (buttonPressed === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/') {
      setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ');
    } else {
      switch (buttonPressed) {
        case 'DEL':
          setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
          break;
        case 'AC':
          setLastNumber('');
          setCurrentNumber('');
          break;
        case '=':
          setLastNumber(currentNumber + ' = ');
          calculator();
          break;
        case '+/-':
          break;
        default:
          setCurrentNumber(currentNumber + buttonPressed);
          break;
      }
    }
  }

  const styles = StyleSheet.create({
    results: {
      backgroundColor: '#f5f5f5',
      width: '100%',
      minHeight: 280,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    resultText: {
      color: '#282F38',
      margin: 10,
      fontSize: 40,
    },
    historyText: {
      color: '#7c7c7c',
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      borderColor: '#e5e5e5',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 90,
      minHeight: 90,
      flex: 2,
    },
    textButton: {
      fontSize: 20,
    },
    equalButton: {
      backgroundColor: '#9DBC7B', 
    },
  });

  return (
    <View>
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => (
          <TouchableOpacity
            onPress={() => handleInput(button)}
            key={button}
            style={[styles.button, button === '=' ? styles.equalButton : null]} // Aplicar o estilo especial ao botão de igual
          >
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}



