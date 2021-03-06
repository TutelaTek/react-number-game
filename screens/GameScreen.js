import React, {useState, useRef,  useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert, Dimensions} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if ( rndNum === exclude){
        return generateRandomBetween(min, max, exclude);

    } else {
        return rndNum;
    }
}

const GameScreen = props => {

    // States
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [rounds, setRounds] = useState(0);
    
    // props 
    const {userChoice, onGameOver} = props;

    // effect state
    useEffect(() => {
        if(currentGuess === props.userChoice){
            props.onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);


    // Handlers
    const nextGuessHandler = direction => {
        if((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'higher' && currentGuess > props.userChoice )) {
            Alert.alert('Don\'t lie!', 'You Know this is wrong',  [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }
        if(direction === 'lower') {
            currentHigh.current = currentGuess;

        } else {
            currentLow.current = currentGuess;
        }
        
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    };

    // Page
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'higher')}/>
            </Card>
        </View>
    )
};


// Style sheet
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('window').height > 600 ? 30 : 5,
        width: 300,
        maxWidth: '80%',
    }
});

export default GameScreen;