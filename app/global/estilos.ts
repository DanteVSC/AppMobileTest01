import { StyleSheet } from "react-native";

export const criarEstilo = (temaAtual: any) => StyleSheet.create({

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

    visorFundo: {
        height: '15%',
        width: '100%',
        backgroundColor: temaAtual.cores.fundo,
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    visor: {
        padding: 10,
        height: '80%',
        width: '95%',
        backgroundColor: temaAtual.cores.fundo_claro,
        borderRadius: 10,
        borderWidth: 4,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

    visorTexto: {
        color: temaAtual.cores.texto,
        fontSize: 32,
        fontWeight: 'bold',
    },

    botoesArea: {
        height: '64%',  
        width: '100%', 
        backgroundColor: temaAtual.cores.fundo,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    botao: {
        width: '20%',
        height: '12%',
        margin: 5,
        fontSize: 40,
        fontWeight: 'bold',
        backgroundColor: temaAtual.cores.primaria,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    botaoTexto: {
        color: temaAtual.cores.texto,
        fontSize: 24,
        fontWeight: 'bold',
    },

    abas: {
        height: '8%',
        width: '100%',
        backgroundColor: temaAtual.cores.primaria,
    },
});