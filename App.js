import React, {useState} from 'react'
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';

import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header'
import StartGameScreen from './screens/StartGameScreen'; 
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';



const fetchFonts = () => {
  
  return Font.loadAsync({'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'), 'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')});
  
 
};


export default function App() {

  // App states
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  // loading data like fonts
  if(!dataLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)}/>;
  }

  
  // handlers
  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  //screen selection
  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  }else if(guessRounds > 0){
    content = (<GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>);
  }
  return (
    <View style={styles.screen} >
      <Header title="Guess a number"> </Header>
      {content}
    </View>
  );
}


// Style sheets
const styles = StyleSheet.create({
  screen:{
    flex: 1
  }
});
