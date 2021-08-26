import React, { useState, } from "react";
import { SafeAreaView, ImageBackground, StyleSheet, Image, View, TextBase, ScrollView } from "react-native";
import { Button, Card, Paragraph, TextInput, Title, HelperText, Appbar } from "react-native-paper";
// import { HeaderComponent } from "../../components/header/header.component";
import { registerStyle } from './cadastro_style';

//Tentei usar as dependencias do TextInputMask, para fazer a mask do campos de input, não encaixou de forma certa, mesmo mexendo no style do cadastro, por isso ficou desativado 
import { TextInputMask } from 'react-native-masked-text';

const imgb1 = './assets/backgroud.png';




export const RegisterScreen = ({ navigation }) => {

    const [cell, setCell] = useState('');

    return (

        <SafeAreaView style={registerStyle.container}>


            <View style={registerStyle.view}>
                <Card>
                    <Card.Content>
                        <ScrollView>
                            <Title style={registerStyle.button1}>Cadastro na Rede</Title>
                            <TextInput
                                label="Nome Completo"
                                placeholder="Qual é o seu nome ?"
                                style={registerStyle.cardButton1}
                            />
                            <TextInput
                                label="Email"
                                placeholder="Qual é o seu email ?"
                                style={registerStyle.cardButton1}
                            />
                            <TextInput
                                label="Phone number"
                                keyboardType="phone-pad"
                                style={registerStyle.cardButton1}
                            />
                            <TextInput
                                label="Data de nascimento"
                                keyboardType="phone-pad"
                                style={registerStyle.cardButton1}
                            />
                            <TextInput
                                label="Senha"
                                placeholder="Digite sua senha"
                                secureTextEntry={true}
                                style={registerStyle.cardButton1}
                                // O icone do "eye" no campo da senha, não está carregando, tentei trocar a rendereização do celular, e alterar o nome do name, mesmo assim não carrega.
                                right={<TextInput.Icon name="eye" />}
                            />
                            <TextInput
                                label="Quem te recomendou?"
                                placeholder="Digite o e-mail de quem te recomendou. ?"
                                style={registerStyle.cardButton1}
                            />
                            <Button
                                mode="contained"
                                onPress={() => navigation.navigate('LoginScreen')}
                                style={registerStyle.button}>Avançar
                            </Button>
                        </ScrollView>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>

    );
}





