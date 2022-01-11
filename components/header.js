import React from 'react';
import { View, Text, StyleSheet } from  'react-native';
import Colors from '../constants/colors';

// Header ui
const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>

    );
}

//Styles sheet
const styles = {
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontFamily: 'open-sans',
        fontSize: 18
    }
}

export default Header;