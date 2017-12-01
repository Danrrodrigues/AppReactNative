//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Profile extends Component {
    static navigationOptions = {
        title: 'Meu Perfil',
        headerTitleStyle: { alignSelf: 'center' } //TODO: Foi mais para direita um pouco
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Profile texto</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Profile;
