import React from "react";
import{View, Text, TextInput, Stylesheet } from 'react-native';

export default function InputPersonalizado({
    legenda,
    textoTemporario,
    valor,
    aoAlterarValor,
    ehSenha = false
})
{
    return(
        <View style={estilos.entradaContainer}>
            {legenda && <Text style={estilos.legenda}>{legenda}</Text>}

            <View>
                <TextInput 
                    placeholder={textoTemporario}
                    value={valor}
                    onChangeText={aoAlterarValor}
                    secureTextEntry={ehSenha}
                    style={estilos.entrada}
                />
            </View>
        </View>
    );
}


const estilos = Stylesheet.create({
    container: {},
    legenda: {},
    entradaContainer:{},
    entrada: {}
});
