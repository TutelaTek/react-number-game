import React from 'react';

import {View, StyleSheet} from 'react-native';


// Card 
const Card = props => {
    return <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>
};


// Styles sheet
const styles = StyleSheet.create({
    card: {
        
        elevation: 5,
        backgroundColor: 'white',
        padding: 20, 
        borderRadius: 10,
    }
});

export default Card;