import React, {useState} from "react";
import { Button, TextStyle, Text, TouchableOpacity, View } from "react-native";
import { criarEstilo } from "../global/estilos";
import { TemaContext } from "../global/TemaContext";
import { temaClaro, temaEscuro, coresBase } from "../global/temas";



export function Calculadora() {
    
    //botoes que alternam
    function BotoesAlternativos({versao, botao}: any) {

        const Textos = [
            ['sen','cos','tan'],
            ['arc sen','arc cos','arc tan'],
            ['^','!','raiz'],
            ['log','ln','mod']
        ];

        // fazer as funcoes depois

        return(
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>{Textos[versao][botao]}</Text></TouchableOpacity>
        );
    }

    const { tema, setTema } = React.useContext(TemaContext);
    const [versao, setVersao] = useState(0);

    function alternarVersao() {
        setVersao((versao + 1) % 4);
    }

    //pega o estilo com contexto
    const estilos = criarEstilo(tema === 'claro' ? temaClaro : temaEscuro);

    //pagina
    return (
        <View style={{width:'100%', height:'100%'}}>

            {/*Navegação*/}
            <View style={estilos.navegacao}>
                <Button title="Alternar tema" onPress={() => setTema(tema === 'claro' ? 'escuro' : 'claro')} />
            </View>

            {/*Legenda*/}
            <View style={estilos.legenda}>
                <Text style={estilos.legendaTexto}>Calculadora</Text>
            </View>

            {/*Visor*/}
            <View style={estilos.visorFundo}>
                <View style={estilos.visor}>
                    <Text style={estilos.visorTexto}>20</Text>
                </View>
            </View>

            {/*Botoes*/}
            <View style={estilos.botoesArea}>
                {/*1 fileira*/}
                <TouchableOpacity style={estilos.botao} onPress={() => alternarVersao()}><Text style={estilos.botaoTexto}>⇅</Text></TouchableOpacity>
                <BotoesAlternativos versao={versao} botao={0} />
                <BotoesAlternativos versao={versao} botao={1} />
                <BotoesAlternativos versao={versao} botao={2} />

                {/*2 fileira*/}
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>1</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>2</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>3</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>4</Text></TouchableOpacity>

                {/*3 fileira*/}
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>1</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>2</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>3</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>4</Text></TouchableOpacity>

                {/*4 fileira*/}
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>1</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>2</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>3</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>4</Text></TouchableOpacity>

                {/*5 fileira*/}
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>1</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>2</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>3</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>4</Text></TouchableOpacity>

                {/*6 fileira*/}
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>1</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>2</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>3</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>4</Text></TouchableOpacity>

                {/*7 fileira*/}
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>1</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>2</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>3</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => {}}><Text style={estilos.botaoTexto}>4</Text></TouchableOpacity>
            </View>

            {/*Abas*/}  
            <View style={estilos.abas}>
                <Text>Calculadora</Text>
            </View>
        </View>
    );
}