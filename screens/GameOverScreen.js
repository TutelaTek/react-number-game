import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions} from 'react-native';
import colors from '../constants/colors';


// Page
const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The Game is Over!</Text>
            <View style={styles.imageContainer}>
            <Image 
            style={styles.image} 
            resizeMode="cover" 
            //source={require('../assets/success.png')} 

            //web image
            source={{uri: 'https://media.istockphoto.com/photos/snowcapped-k2-peak-picture-id1288385045?b=1&k=20&m=1288385045&s=170667a&w=0&h=3M3ZRl1bxOGxcvmYZ-TOtuJ3idm0psm4c7GFba1TA5g='}}
            />
            </View>
            <Text style={styles.spacing}>Number of rounds: <Text style={styles.hightlight}>{props.roundsNumber}</Text></Text>
            <Text style={styles.spacing}>Number was: <Text style={styles.hightlight}>{props.userNumber}</Text></Text>
            <Button color={colors.primary} title="New Game" onPress={props.onRestart}/>
        </View>
    );
};


//Style sheet
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        
    },
    imageContainer:{

        borderRadius: Dimensions.get('window').width * 0.7 /2,
        borderWidth: 3,
        borderColor: colors.primary,
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 20,
    },
    hightlight: {
        color: 'red',
        
    },
    title: {
        fontSize: 30,
        
    },
    spacing: {
        padding: 10,
        fontSize: 20,
    },
    
    



})

export default GameOverScreen;