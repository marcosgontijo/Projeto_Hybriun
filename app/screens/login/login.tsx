import React from "react";
import { SafeAreaView, ImageBackground, StyleSheet, View, Image } from "react-native";
import { Button, Card, Paragraph, TextInput, Title, HelperText } from "react-native-paper";
import { loginStyle } from './login_style';

const backgroud = './assets/backgroud.jpg';
export const LoginScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={loginStyle.container}>
            <View style={loginStyle.view}>
                <Card>
                    <Card.Content style={loginStyle.cardButton}>
                        <Paragraph>Bem-Vindo </Paragraph>


                        <Title>Ao clube de vantagens da I Believe</Title>

                        <TextInput label="Email"
                            placeholder="Digite o seu e-mail"
                            keyboardType="email-address"
                        >
                        </TextInput>

                        <TextInput
                            label="Senha"
                            placeholder="Digite sua senha"
                            secureTextEntry={true}>

                        </TextInput>

                        <Button mode="contained"
                            onPress={() => navigation.navigate('PrincipalScreen')}
                            style={loginStyle.cardButton1}>Acessar sua conta</Button>
                        <Button
                            uppercase={false}>Não tem conta?
                        </Button>

                        <Button
                            mode="contained"
                            onPress={() => navigation.navigate('RegisterScreen')}>Cadastra-se
                        </Button>

                    </Card.Content>
                </Card>
            </View>

        </SafeAreaView>


    );
}
