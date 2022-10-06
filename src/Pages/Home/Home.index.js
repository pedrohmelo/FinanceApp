import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet,
    Text, 
    View,
    FlatList 
} from 'react-native';
import Header from '../../Components/Header/Header.index';
import Balance from '../../Components/Balance/Balance.index';
import Movements from '../../Components/Movements/Movements.index';
import Actions from '../../Components/Actions/Actions.index';

const list = [
    {
        id: 1,
        label: 'Jogo do Bicho',
        value: '300,90',
        date: '01/09/2022',
        type: 0 //despesas/saída
    },
    {
        id: 2,
        label: 'Pix Pack do Pezinho',
        value: '590,00',
        date: '03/10/2022',
        type: 1 //receitas/entrada
    },
    {
        id: 3,
        label: 'Sonegação Imposto',
        value: '23.900,00',
        date: '06/10/2022',
        type: 1 //receitas/entrada
    }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Pedro Melo" />

        <Balance saldo="752.080,00" gastos="2.527,00"/>

        <Actions />

        <Text style={styles.title}>Últimas Movimentações</Text>
        <FlatList 
            style={styles.list}
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Movements data={item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
