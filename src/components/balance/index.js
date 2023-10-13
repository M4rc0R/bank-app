import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {MotiView} from 'moti';

export default function Balance({saldo, gastos}) {
 return (
   <MotiView

   from={{
    rotateX: '-100deg',
    opacity: 0,
   }}
   animate={{
    rotateX: '0deg',
    opacity: 1,
   }}
   transition={{
    type: 'spring',
    delay: 300,
    duration: 1000,
   }}
   
   
   
   style={styles.container}>
    <View style={styles.itens}>
        <Text style={styles.titleitens}>Saldo</Text>
        <View style={styles.saldosView}>
            <Text style={styles.saldoSimbolo}>R$</Text>
            <Text style={styles.saldoAtual}>{saldo}</Text>
        </View>
    </View>


    <View style={styles.itens}>
        <Text style={styles.titleitens}>Gastos</Text>
        <View style={styles.saldosView}>
            <Text style={styles.saldoSimbolo}>R$</Text>
            <Text style={styles.gastoAtual}>{gastos}</Text>
        </View>
    </View>
   </MotiView>
  );
}


const styles = StyleSheet.create({
container:{
    backgroundColor:'#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingStart: 18,
    paddingEnd: 18,
    marginStart: 8,
    marginTop: -30,
    marginEnd: 8,
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 10,
    zIndex: 99,
}, 
titleitens:{
    fontSize: 20,
    color: '#DADADA'
},
saldosView:{
    flexDirection: 'row',
    alignItems: 'center',
},
saldoSimbolo:{
    color:"#DADADA",
    marginRight: 6,
},
saldoAtual:{
    fontSize: 20,
    color:"#2ecc71",
},
gastoAtual:{
    fontSize: 20,
    color:"#e74c3c",
},
})