import { StyleSheet } from "react-native";
import { temaClaro, temaEscuro, coresBase } from "./temas";

const temaAtual = temaClaro;

export const estilos = StyleSheet.create({

    navegacao: {
        height: '5%',
        width: '100%',
        backgroundColor: temaAtual.cores.fundo, 
    },
    
    legenda: {
        height: '8%',
        width: '100%',
        backgroundColor: temaAtual.cores.primaria,
        alignItems: 'center',
        justifyContent: 'center',
    },

    legendaTexto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },

    visor: {
        height: '15%',
        width: '100%',
        backgroundColor: temaAtual.cores.secundaria_clara,
    },

    botoes: {
        height: '64%',  
        width: '100%', 
        backgroundColor: temaAtual.cores.primaria_escura,
    },

    abas: {
        height: '8%',
        width: '100%',
        backgroundColor: temaAtual.cores.primaria_escura,
    },
});