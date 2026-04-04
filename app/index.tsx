import { Text, View } from "react-native";
import {Calculadora} from "./pages/Calculadora";
import { TemaProvider } from "./global/TemaContext";

//Biblioteca que retorna views com o tamanho apropriado pra cada dispositivo. ignorando as areas do topo e de baixa onde têm os botões
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}> 
        <TemaProvider>
          <Calculadora />
        </TemaProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
