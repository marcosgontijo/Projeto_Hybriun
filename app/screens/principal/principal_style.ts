import React from 'react';
import { StyleSheet } from "react-native";

export const principalStyle = StyleSheet.create({

    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "#EDEDED",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        marginLeft: 0,
        marginRight: 0,
    },
    view: {
        width: "80%",
    },
    cardButton: {
        height: 40,
        backgroundColor: '#EDEDED',
        borderRadius: 5,
        fontSize: 20,
        padding: 5,
    },
    cardButton1: {
        margin: 20,
        marginLeft: 0,
        marginRight: 0,
    },

    button: {
        margin: 25,
        marginLeft: 0,
        marginRight: 0,
    },

    input: {
        width: "85 %",
        height: 20,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        fontSize: 15,
        padding: 20,


    }

})