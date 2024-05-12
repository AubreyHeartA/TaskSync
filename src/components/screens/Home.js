import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native'
import styles from "../../config/styles"; 
import { Icon } from 'react-native-paper'

const Home = ({ route = {} }) => {
    const { activeTasks = [], completedTasks = [] } = route.params || {};

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('./../../../assets/banner.png')} resizeMode='contain' />
            </View>

            <Text style={styles.welcome}>Welcome Back, User 001!</Text>
            
            <View style={styles.countContainer}>
                <View style={styles.activeTasks}>
                    <View style={styles.count}>
                        <Icon source="progress-clock" size={30} color="#fff" />
                        <Text style={styles.counting}>{activeTasks.length}</Text>
                    </View>
                    <Text style={styles.taskText}>Active Tasks</Text>
                </View>

                <View style={styles.completedTask}>
                    <View style={styles.count}>
                        <Icon source="checkbox-marked-circle-outline" size={30} color="#fff" />
                        <Text style={styles.counting}>{completedTasks.length}</Text>
                    </View>
                    <Text style={styles.taskText}>Tasks Completed</Text>
                </View>

            </View>
            <View>
                
            </View>

        </ScrollView>
        
    )
}

export default Home;

