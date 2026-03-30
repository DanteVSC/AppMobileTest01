import React from "react";
import { Text, View } from "react-native";
import { estilos } from "../global/estilos";

export function Calculadora() {
    return (
        <View style={{width:'100%', height:'100%'}}>

            {/*Navegação*/}
            <View style={estilos.navegacao}>
                <Text>Calculadora</Text>
            </View>

            {/*Legenda*/}
            <View style={estilos.legenda}>
                <Text style={estilos.legendaTexto}>Calculadora</Text>
            </View>

            {/*Visor*/}
            <View style={estilos.visor}>
                <Text>Calculadora</Text>
            </View>

            {/*Botoes*/}
            <View style={estilos.botoes}>
                <Text>Calculadora</Text>
            </View>

            {/*Abas*/}  
            <View style={estilos.abas}>
                <Text>Calculadora</Text>
            </View>
        </View>
    );
}