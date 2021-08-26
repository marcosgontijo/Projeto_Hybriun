import React from 'react';
import { Appbar } from 'react-native-paper';

export const HeaderComponent = (props: HeaderComponentParams) => {

    return (

        <Appbar>
            <Appbar.BackAction />
            <Appbar.Content title={props.title} />

        </Appbar>

    )
}

interface HeaderComponentParams {
    title: string;
}


//Teste, tentei colocar um AppBar com um backAction para voltar a uma tela anterior, mas não ficou como imagina, decidi dexar o código para anotação;