import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegistrarAnamneseParte4 = () => {
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>PSICODFMANAGER</Text>
                <Text style={styles.title}>REGISTRAR ANAMNESE</Text>
                <Text style={styles.subtitle}>4 - Histórico pessoal:</Text>
            </View>

            <View style={styles.sectionContainer}>
                <TextInput style={styles.input} placeholder="Infância" multiline />
                <Text style={styles.limitText}>Limite de 200 caracteres</Text>

                <TextInput style={styles.input} placeholder="Rotina" multiline />
                <Text style={styles.limitText}>Limite de 200 caracteres</Text>

                <TextInput style={styles.input} placeholder="Vícios" multiline />
                <Text style={styles.limitText}>Limite de 200 caracteres</Text>

                <TextInput style={styles.input} placeholder="Hobbies" multiline />
                <Text style={styles.limitText}>Limite de 200 caracteres</Text>

                <TextInput style={styles.input} placeholder="Trabalho" multiline />
                <Text style={styles.limitText}>Limite de 200 caracteres</Text>
            </View>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('ProximaTela')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Próximo →</Text>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#5DC4FF', // Fundo azul claro
        padding: 20,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#000',
        marginBottom: 10,
    },
    sectionContainer: {
        marginBottom: 30,
    },
    input: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 10,
    },
    limitText: {
        fontSize: 12,
        color: '#000',
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
});

export default RegistrarAnamneseParte4;
