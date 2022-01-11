import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions, ScrollView} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {

    // States
    const[enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false); 
    const [selectedNumber, setSelectedNumber] = useState();
    const [buttonWidth, setButtonWidth ] = useState(Dimensions.get('window'));


    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width /4)
        }

        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.addEventListener('change', updateLayout).remove;
        }
    });
    // Handlers

    
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
            Alert.alert("invalid number!", 'Number has to be a number between 1 and 99.', [{ text: 'Okay', style:'destructive', onPress: resetInputHandler }])
            return ;
        } 
        setConfirmed(true);
        setSelectedNumber(parseInt(chosenNumber));
        setEnteredValue('');
        Keyboard.dismiss();
    }

    // Card UI
    let confirmedOutput;
    if(confirmed){
        confirmedOutput = <Card style={styles.summaryContainer}>
            <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}/>
            </Card>
    }

    // Page
    return (
        <ScrollView>
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss()}}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.text}>Select a Number</Text>
                <Input style={styles.input} blurOnSubmit autoCapitalize='none' keyboardType="numeric" maxLength={2} onChangeText={numberInputHandler} value={enteredValue}/>
                <View style={styles.buttonContainer}>
                    <View style={{width: buttonWidth}}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/></View>
                    <View style={{width: buttonWidth}}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
        </ScrollView>
    )
};


// Style sheets
const styles = {
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        
    },
    title: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        marginVertical: 10,
    },
    inputContainer: {
        width: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    
    input: {
        width: 50,
        textAlign: 'center',
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    text: {
        fontFamily: 'open-sans',
    }
};

export default StartGameScreen;