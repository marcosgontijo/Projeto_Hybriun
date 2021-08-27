import React from 'react';
import { StyleSheet, ImageBackground } from "react-native";

const imgb1 = './assets/backgroud.png';

export const loginStyle = StyleSheet.create({

    container: {

        display: "flex",
        flex: 1,
        backgroundColor: "#EDEDED",
        alignItems: 'center',
        justifyContent: 'center',
    },
    view: {
        width: "80%"
    },
    cardButton: {
        backgroundColor: "#fff",
        margin: 45,
        marginLeft: 0,
        marginRight: 0,
    },
    cardButton1: {
        margin: 35,
        marginLeft: 0,
        marginRight: 0,
    },
})