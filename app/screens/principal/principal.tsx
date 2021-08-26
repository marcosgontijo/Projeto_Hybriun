import React from "react";
import { SafeAreaView, ImageBackground, StyleSheet, Image, View, TextBase } from "react-native";
import { Button, Card, Paragraph, TextInput, Title, Chip } from "react-native-paper";
import { principalStyle } from '../principal/principal_style';


export const PrincipalScreen = ({ navigation }) => {

    return (

        <SafeAreaView style={principalStyle.container}>
            <Title>BEM-VINDO </Title>

            <Title> Conheça os nossos parceiros </Title>

            <TextInput
                placeholder="Pesquisar o estabelecimento"
                style={principalStyle.input}>
            </TextInput>

            <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
            <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>

        </SafeAreaView>


    );
}
