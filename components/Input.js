import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

// input card
const Input = props => {
    return <TextInput {...props} style={{...styles.input, ...props.style }}/>
};


// Style sheet
const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
    }
});

export default Input;