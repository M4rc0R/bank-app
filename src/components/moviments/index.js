import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Moviments({data}) {

    const [showValue, setShowValue] = useState(false);



 return (
   <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
    <Text  style={styles.data}>{data.date}</Text>
    <View  style={styles.conteudo}>
        <Text  style={styles.titulo}>{data.label}</Text>

        {showValue ? (
            <Text style={data.type === 1 ? styles.valor : styles.expenses}>
            {data.type ===1 ? `R$ ${data.value}` : `R$ -${data.value}`}</Text>
        ) : (
            <View style={styles.scala}></View>
        )}
    </View>
   </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 25,
        borderBottomWidth: 0.5,
        borderBottomColor: "#DADADA",
    },
    conteudo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3,
        marginBottom: 5,
    },
    data:{
        color: '#DADADA',
        fontWeight: 'bold',
    },
    titulo:{
        fontWeight:'bold',
        fontSize: 17,
        color:'#fff',
    },
    valor:{
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    expenses: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    scala:{
        margin: 6,
        width: 80,
        height: 10,
        backgroundColor: "#DADADA",
        borderRadius: 12,
    }
})