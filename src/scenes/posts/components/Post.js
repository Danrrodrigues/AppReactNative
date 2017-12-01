//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Posts extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.postTitle}>Aprendendo React Native</Text>
                <Text style={styles.postAuthor}>Pedrinho Autor</Text>
                <View  style={{borderBottomColor: '#EBEBEB', borderBottomWidth: 1,
                    marginTop:8}}/>
                <Text style={styles.postDescription}>Silvio Santos Ipsum É com você Lombardiam. Ha hai. Bem boladoam, bem boladoam. Bem gozadoam. É por sua conta e riscoamm? Estamos em ritmo de festamm. O arriscam tuduam, valendo um milhão de reaisuam. O Raul Gil é gayam! ... Maa O Ah Ae! Ih Ih! O Raul Gil é gayamm! Valendo um milhão de reaisammm. É dinheiro ou não éam? É dinheiro ou não éam? Um, dois três, quatro, PIM, entendeuam? Ma vejam só, vejam só. O arriscam tuduam, valendo um milhão de reaisuam.</Text>
            </View>
        );
    }
} 

// define your styles
const styles = StyleSheet.create({
    container: {
        //flex: 1, serve para ocupar 100% de onde está 
        //borderWidth:1,
        padding:20,
        marginTop:10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        shadowColor:'#DA6C6C', //TODO: não notado diferença, testar mais
        shadowOffset: { width: 0, height: 100 },  //TODO: não notado diferença, testar mais
        shadowOpacity: 100, //TODO: não notado diferença, testar mais
        shadowRadius: 5 //TODO: não notado diferença, testar mais
    },
    postTitle:{
        fontSize: 18,
        color:'black',
        fontWeight: 'bold' 
    },
    postAuthor:{
        fontSize: 14, 
        color:'#999999'
    },
    postDescription:{
        marginTop:10
    }
});

//make this component available to the app
export default Posts;
