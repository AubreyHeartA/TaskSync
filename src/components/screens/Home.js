import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import styles from "../../config/styles";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTasks, setFilteredTasks] = useState([]); 
    const [user, setUser] = useState({ firstName: '', lastName: '' });
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        const loadData = async () => {
            // Fetch user details
            const firstNameValue = await AsyncStorage.getItem('firstName');
            const lastNameValue = await AsyncStorage.getItem('lastName');
            const profilePhotoUri = await AsyncStorage.getItem('profilePhoto');
            const taskData = await AsyncStorage.getItem('tasks');

            setUser({
                firstName: firstNameValue || 'User',
                lastName: lastNameValue || '',
                profilePhoto: profilePhotoUri || '../../../assets/blank-profile-picture.png',
            });

            if (taskData) {
                setTasks(JSON.parse(taskData));
            }
        };
        
        loadData();
    }, []);

    const activeTasks = tasks.filter(task => task.status === "Pending");
    const completedTasks = tasks.filter(task => task.status === "Completed");
    
    const handleFilterByTitle = (title) => {
        const filteredTasks = tasks.filter((t) =>
        t.title.toLowerCase().includes(title.toLowerCase())
        );
        setFilteredTasks(filteredTasks);
    };

    useEffect(() => {
        handleFilterByTitle(searchQuery);
    }, [searchQuery]);

    return (
        <ScrollView style={{ flex: 1, padding: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <Image
                source={require('./../../../assets/banner.png')} // Make sure the path is correct
                style={{ width: 150, height: 40, resizeMode: 'contain', marginRight: 50 }}
            />
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    padding: 8,
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                    elevation: 5,
                    marginRight: 5
                }}>
                    <View style={{
                        backgroundColor: '#2ECC71',
                        borderRadius: 15,
                        width: 25,
                        height: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 10
                    }}>
                        <Feather name="search" size={20} color="white" />
                    </View>
                    <TextInput
                        style={{ flex: 1, fontSize: 14 }}
                        placeholder="Search task"
                        value={searchQuery}
                        onChangeText={text => setSearchQuery(text)}
                    />
                </View>
            </View>

            <View style={styles.profileSection}>
                <Image
                    source={{ uri: user.profilePhoto }}
                    style={styles.profilePhoto}
                />
                <Text style={styles.welcome}>Welcome back, {user.firstName} {user.lastName}!</Text>
            </View>
            
            <View style={styles.countContainer}>
                <View style={[styles.taskCounter, styles.activeTaskCounter]}>
                    <View style={styles.verticalLayout}>
                        <View style={styles.iconWithLabel}>
                            <Feather name="clock" size={40} color="white" style={styles.taskIcon} />
                            <Text style={styles.iconLabel}>Active</Text>
                        </View>
                        <View style={styles.arrowNumberTask}>
                            <Text style={styles.counterText}>{activeTasks.length} Tasks</Text>
                            <Feather name="chevron-right" size={20} color="white" style={styles.chevronIcon}/>
                        </View>
                    </View>
                </View>
                
                <View style={[styles.taskCounter, styles.completedTaskCounter]}>
                    <View style={styles.verticalLayout}>
                        <View style={styles.iconWithLabel}>
                            <Feather name="check-circle" size={40} color="white" style={styles.taskIcon} />
                            <Text style={styles.iconLabel}>Completed</Text>
                        </View>
                        <View style={styles.arrowNumberTask}>
                            <Text style={styles.counterText}>{completedTasks.length} Tasks</Text>
                            <Feather name="chevron-right" size={20} color="white" style={styles.chevronIcon} />
                        </View>
                    </View>
                </View>
            </View>

            {/* Optionally display a list of active tasks, can be a detailed list or a simple card view */}
            <View>
                <Text style={styles.sectionTitle}>All Tasks</Text>
                {tasks.map(task => (
                    <View key={task.id} style={styles.taskCard}>
                        <Text>{task.title}</Text>
                        <Text>Priority: {task.priority}</Text>
                        <Text>Status: {task.status}</Text>
                        <Text>Deadline: {task.deadline}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default Home;