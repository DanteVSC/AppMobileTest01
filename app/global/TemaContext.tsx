import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TemaContext = createContext({} as any);

export const TemaProvider = ({ children }: any) => {
    
    const TemaDispositivo = useColorScheme();
    const [tema, setTema] = useState(TemaDispositivo === 'dark' ? 'escuro' : 'claro');
    const [carregando, setCarregando] = useState(true);

    // carrega o tema.
    useEffect(() => {
        carregarTema();
    }, []);

    const carregarTema = async () => {
        try {
            const temaSalvo = await AsyncStorage.getItem('tema');
            if (temaSalvo) {
                setTema(temaSalvo); // Usa o tema salvo
            }
        } catch (error) {
            console.log('Erro ao carregar o tema:', error);
        } finally {
            setCarregando(false);
        }
    };

    const atualizarTema = async (novoTema: string) => {
        try {
            setTema(novoTema); // Atualiza na tela
            await AsyncStorage.setItem('tema', novoTema); // Salva no dispositivo
        } catch (error) {
            console.log('Erro ao salvar o tema:', error);
        }
    };

    // Não renderiza nada enquanto carrega
    if (carregando) {
        return null;
    }

   
    return (
        <TemaContext.Provider value={{ tema, setTema: atualizarTema }}> 
            {children}
        </TemaContext.Provider>
    );
};
