import React from "react";
import { 
    View, 
    StyleSheet, 
    Text, 
    StatusBar,
    TouchableOpacity
} from "react-native";
import {Feather} from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64 //como só funciona para android, se receber o currentHeight ele usa o height+22, se for em iOS ele irá aderir o 64

export default function Header({name}){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.userName}>Olá, {name}</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.userButton}>
                    <Feather name="user" size={27} color="#FFF"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000FF',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    userName: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    userButton: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22
    }
})