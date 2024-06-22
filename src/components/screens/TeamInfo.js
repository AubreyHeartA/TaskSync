import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TeamInfo = () => {
    const navigation = useNavigation();

    const teamMembers = [
        { id: '1', firstName: 'Aubrey Heart', lastName: 'Arian', course: 'BSIT' },
        { id: '2', firstName: 'Clarice', lastName: 'Domingo', course: 'BSIT'  },
        { id: '3', firstName: 'Dominic', lastName: 'Daculiat', course: 'BSIT' },
        { id: '4', firstName: 'Zairyl Mae', lastName: 'Patosa', course: 'BSIT' },
    ];

    return (
        <View style={styles.container}>
        <View style={styles.table}>
            <View style={[styles.row, styles.headerRow]}>
            <Text style={[styles.cell, styles.header]}>ID</Text>
            <Text style={[styles.cell, styles.header]}>First Name</Text>
            <Text style={[styles.cell, styles.header]}>Last Name</Text>
            <Text style={[styles.cell, styles.header]}>Course</Text>
            </View>
            {teamMembers.map(member => (
            <View key={member.course} style={styles.row}>
            <Text style={styles.cell}>{member.id}</Text>
                <Text style={styles.cell}>{member.firstName}</Text>
                <Text style={styles.cell}>{member.lastName}</Text>
                <Text style={styles.cell}>{member.course}</Text>
            </View>
            ))}
        </View>
        <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Home')}
        >
            <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    table: {
        width: '90%',
    },
    row: {
        flexDirection: 'row',
    },
    headerRow: {
        backgroundColor: '#fff',
    },
    cell: {
        flex: 1,
        padding: 10,
        textAlign: 'center',
        fontSize: 13,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    header: {
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#3CB371',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default TeamInfo;
