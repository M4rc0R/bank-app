import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Headers from '../../components/headers';
import Balance from '../../components/balance';
import Moviments from '../../components/moviments';
import Actions from '../../components/actions';


const list = [

    {
        id: 1,
        label: 'Salário',
        value: '2.750',
        date: '31/08/2023',
        type: 1
    },

    {
        id: 2,
        label: 'Conta de água',
        value: '275,50',
        date: '02/09/2023',
        type: 0
    },
    {
        id: 3,
        label: 'Plano de Saúde',
        value: '180,00',
        date: '02/09/2023',
        type: 0
    },
    {
        id: 4,
        label: 'Celular',
        value: '125,55',
        date: '05/09/2023',
        type: 0
    },
    {
        id: 5,
        label: 'Posto Dvó',
        value: '175,80',
        date: '07/09/2023',
        type: 0
    }
]

export default function Home(){
    return(
    <View style={styles.container}>
        <Headers name="Marco Santos"></Headers>
        <Balance saldo = "8.429,17" gastos="- 1.494,93"></Balance>

        <Actions></Actions>

        <Text style={styles.title}>
            Extrato
        </Text>

        <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Moviments data={item}/>}
        />
    </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#472006',
    },
    title:{
        fontSize:18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 25,
        marginBottom: 40,
        color:'#fff',
    },
    list:{
        marginLeft: 15,
        marginRight: 15,
    }
})