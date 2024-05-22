import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import styles from "../../config/HomeStyles";

const Home = () => {
    const isFocused = useIsFocused();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTasks, setFilteredTasks] = useState([]); 
    const [user, setUser] = useState({ firstName: '', lastName: '', profilePhoto: '' });
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        const loadData = async () => {
            // Fetch user details
            const userCredentials = JSON.parse(await AsyncStorage.getItem('userCredentials'));
            const profilePhotoUri = await AsyncStorage.getItem('profilePhoto');
            const taskData = await AsyncStorage.getItem('tasks');

            if (userCredentials) {
                setUser({
                    firstName: userCredentials.firstName,
                    lastName: userCredentials.lastName,
                    profilePhoto: profilePhotoUri || '../../../assets/blank-profile-picture.png',
                });
            }

            if (taskData) {
                const allTasks = JSON.parse(taskData);
                setTasks(allTasks);
                setFilteredTasks(allTasks.filter(task => task.status === "Pending")); // Filter to show only active tasks
            }
        };
        if (isFocused) {
            loadData();
        }
    }, [isFocused]);

    const activeTasks = tasks.filter(task => task.status === "Pending");
    const completedTasks = tasks.filter(task => task.status === "Completed");
    
    const handleFilterByTitle = (title) => {
        const filteredTasks = tasks.filter((t) =>
        t.title.toLowerCase().includes(title.toLowerCase())
        );
        setFilteredTasks(filteredTasks);
    };

    useEffect(() => {
        const filtered = tasks.filter(task => 
            task.status === "Pending" && task.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredTasks(filtered);
    }, [searchQuery, tasks]);

    return (
        <View style={styles.container}>
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

            <View style={styles.headerSection}>
                <View style={styles.headerTextSection}>
                    <Text style={styles.welcomeText}>Welcome back,</Text>
                    <Text style={styles.userNameText}>{user.firstName} {user.lastName}!</Text>
                </View>
                <Image
                    source={{ uri: user.profilePhoto }}
                    style={styles.profilePhoto}
                />
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
                    </View>
                </View>
            </View>

            <Text style={styles.sectionTitle}>All Tasks</Text>
            <ScrollView style={styles.taskListContainer}>
                {filteredTasks.map(task => (
                    <View key={task.id} style={styles.taskCard}>
                        <Text style={styles.taskTitle}>{task.title}</Text>
                        <Text style={styles.taskStatus}>Status: {task.status}</Text>
                        <Text style={styles.taskDeadline}>Deadline: {task.deadline}</Text>
                        <Text style={styles.taskCreated}>Created: {task.createdAt}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default Home;
