import React from "react";
import { SafeAreaView, ImageBackground, StyleSheet, Image, View, TextBase } from "react-native";
import { Button, Card, Paragraph, TextInput, Title, Chip, IconButton } from "react-native-paper";
import { principalStyle } from '../principal/principal_style';

const backgroud = './app/assets/background.jpg';
export const PrincipalScreen = ({ navigation }) => {

    return (

        <View>
            <ImageBackground
                resizeMode='cover'
                source={require('./backgroud.jpg')}>



                <SafeAreaView style={principalStyle.container}>
                    <Title>BEM-VINDO </Title>

                    <Title> Conheça os nossos parceiros </Title>

                    <TextInput
                        placeholder="Pesquisar o estabelecimento"
                        style={principalStyle.input}>
                    </TextInput>


                </SafeAreaView>
            </ImageBackground >

        </View>


    );
}
