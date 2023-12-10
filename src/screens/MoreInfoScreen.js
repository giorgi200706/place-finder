import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

const MoreInfoScreen = ({ route }) => {
    const navigation = useNavigation();
    const url  = route.params.url;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.goBack()}>
                    <Text style={styles.button}>Back To Last Screen</Text>
                </TouchableOpacity>
            </View> 
            <View style={styles.body}>
                <WebView source={{uri: url}} style={styles.webView} />
            </View>  
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    header: {
        marginTop: 50,
        marginBottom: 20,
        alignItems: 'center',
    },
    button: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '600',
        marginBottom: 3,
    },
    buttonContainer: {
        width: 200,
        height: 40,
        backgroundColor: '#CC5500',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        height: '90%',
        width: '100%',
    },
    webView: {
        height: '80%',
        width: '100%',
        flex: 1,
    }
});


export default MoreInfoScreen;
