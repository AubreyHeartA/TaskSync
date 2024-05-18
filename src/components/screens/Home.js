import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import styles from "../../config/HomeStyles";

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
        <ScrollView style={styles.container}>
            <View style={styles.searchSection}>
            <Image
                source={require('./../../../assets/banner.png')} 
                style={styles.bannerImage}
            />
                <View style={styles.searchBarContainer}>
                    <View style={styles.searchIcon}>
                        <Feather name="search" size={20} color="white" />
                    </View>
                    <TextInput
                        style={styles.searchInput}
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
                    </View>
                    <View style={styles.arrowNumberTask}>
                        <Text style={styles.counterText}>{activeTasks.length} Tasks</Text>
                        <Feather name="chevron-right" size={20} color="white" style={styles.chevronIcon}/>
                    </View>
                </View>
                
                <View style={[styles.taskCounter, styles.completedTaskCounter]}>
                    <View style={styles.verticalLayout}>
                        <View style={styles.iconWithLabel}>
                            <Feather name="check-circle" size={40} color="white" style={styles.taskIcon} />
                            <Text style={styles.iconLabel}>Completed</Text>
                        </View>
                    </View>
                    <View style={styles.arrowNumberTask}>
                        <Text style={styles.counterText}>{completedTasks.length} Tasks</Text>
                        <Feather name="chevron-right" size={20} color="white" style={styles.chevronIcon} />
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