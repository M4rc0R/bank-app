import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import {MotiView, MotiText} from 'moti';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Headers({name}) {
  return (
    <View style={styles.container}>


      <MotiView style={styles.content} from={{
      translateY: -150,
      opacity: 1,
    }}
    animate={{
      translateY: 0,
      opacity: 1,}}
      
      transition={{
        type: 'timing',
        duration: 800,
        delay: 300,
      }}
      >


      <TouchableOpacity activeOpacity={0.6} style={styles.btnUser}>
        <Feather name='user' size={27} color={'#111'}/>
      </TouchableOpacity>


      <MotiText style={styles.username}
      from={{
        translateX: -300
      }}
      animate={{
        translateX: 0
      }}
      transition={{
        type: 'spring',
        duration: 800,
        delay: 300,
      }}
      >{name}</MotiText>
      
      </MotiView>
      
     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#a86032',
      padding: StatusBarHeight,
      flexDirection: 'row',
      paddingStart: 14,
      paddingEnd: 14,
      paddingBottom: 50,
    },
    content:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: "row"
    },
    username:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 22,
    },
    btnUser:{
      width:44,
      height: 44,
      backgroundColor: 'rgba(255,255,255, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 44/2,
    }
  });
