import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {AntDesign} from '@expo/vector-icons'

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator = {false}>

    <TouchableOpacity style={styles.actionBnt}>
        <View style={styles.areaBnt}>
            <AntDesign name='addfolder' size={26} color={"#111"}></AntDesign>
        </View>
        <Text style={styles.labelBnt}>Entradas</Text>
    </TouchableOpacity>



    <TouchableOpacity style={styles.actionBnt}>
        <View style={styles.areaBnt}>
            <AntDesign name='shoppingcart' size={26} color={"#111"}></AntDesign>
        </View>
        <Text style={styles.labelBnt}>Shop</Text>
    </TouchableOpacity>


    <TouchableOpacity style={styles.actionBnt}>
        <View style={styles.areaBnt}>
            <AntDesign name='barcode' size={26} color={"#111"}></AntDesign>
        </View>
        <Text style={styles.labelBnt}>Pagamentos</Text>
    </TouchableOpacity>


    <TouchableOpacity style={styles.actionBnt}>
        <View style={styles.areaBnt}>
            <AntDesign name='creditcard' size={26} color={"#111"}></AntDesign>
        </View>
        <Text style={styles.labelBnt}>Cartões</Text>
    </TouchableOpacity>


    <TouchableOpacity style={styles.actionBnt}>
        <View style={styles.areaBnt}>
            <AntDesign name='setting' size={26} color={"#111"}></AntDesign>
        </View>
        <Text style={styles.labelBnt}>Conta</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionBnt}>
        <View style={styles.areaBnt}>
            <AntDesign name='barschart' size={26} color={"#111"}></AntDesign>
        </View>
        <Text style={styles.labelBnt}>Investimentos</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionBnt}>
        <View style={styles.areaBnt}>
            <AntDesign name='question' size={26} color={"#111"}></AntDesign>
        </View>
        <Text style={styles.labelBnt}>Suporte</Text>
    </TouchableOpacity>




   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        height: 150,
        maxHeight: 200,
        marginBottom: 20,
        marginTop: 18,
        paddingEnd: 15,
        paddingStart: 15,
    },
    actionBnt:{
        alignItems: 'center',
        marginRight: 32,
    },
    areaBnt:{
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelBnt:{
        marginTop: 4,
        color: "#fff",
        textAlign: 'center',
    }
})