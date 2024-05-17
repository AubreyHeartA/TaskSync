import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../../config/styles";  

const Home = () => {
    const [user, setUser] = useState({ firstName: '', lastName: '' });
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        const loadData = async () => {
            // Fetch user details
            const firstNameValue = await AsyncStorage.getItem('firstName');
            const lastNameValue = await AsyncStorage.getItem('lastName');
            const taskData = await AsyncStorage.getItem('tasks');

            setUser({
                firstName: firstNameValue || 'User',
                lastName: lastNameValue || ''
            });

            if (taskData) {
                setTasks(JSON.parse(taskData));
            }
        };
        
        loadData();
    }, []);

    const activeTasks = tasks.filter(task => task.status === "Pending");
    const completedTasks = tasks.filter(task => task.status === "Completed");

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('./../../../assets/banner.png')} resizeMode='contain' />
            </View>
            <Text style={styles.welcome}>Welcome back, {user.firstName} {user.lastName}!</Text>
            
            <View style={styles.countContainer}>
                <View style={styles.activeTasks}>
                    <View style={styles.count}>
                        <Text style={styles.counting}>{activeTasks.length}</Text>
                    </View>
                    <Text style={styles.taskText}>Active Tasks</Text>
                </View>

                <View style={styles.completedTask}>
                    <View style={styles.count}>
                        <Text style={styles.counting}>{completedTasks.length}</Text>
                    </View>
                    <Text style={styles.taskText}>Tasks Completed</Text>
                </View>
            </View>

            {/* Optionally display a list of active tasks, can be a detailed list or a simple card view */}
            <View>
                <Text style={styles.sectionTitle}>All Tasks</Text>
                {tasks.map(task => (
                    <View key={task.id} style={styles.taskCard}>
                        <Text>{task.title}</Text>
                        <Text>Status: {task.status}</Text>
                        <Text>Deadline: {task.deadline}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default Home;