import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'

import globalstyles from '../../config/styles'
import { Icon } from 'react-native-paper'

export default function Home() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.logo} source={require('./../../../assets/banner.png')} resizeMode='contain' />
            {/* <Icon source="magnify" size={24} color="black" /> s */}
        </View>

        <Text style={styles.welcome}>Welcome Back, User 001!</Text>
         
        <View style={styles.countContainer}>
            <View style={styles.ongoingTask}>
                <View style={styles.count}>
                    <Icon source="progress-clock" size={30} color="#fff" />
                    <Text style={styles.counting}>123</Text>
                </View>
                <Text style={styles.taskText}>Ongoing Tasks</Text>
            </View>

            <View style={styles.completedTask}>
                <View style={styles.count}>
                    <Icon source="checkbox-marked-circle-outline" size={30} color="#fff" />
                    <Text style={styles.counting}>123</Text>
                </View>
                <Text style={styles.taskText}>Task Completed</Text>
            </View>

        </View>
        <View>
            
        </View>

    </ScrollView>
    
  )
}

const styles = StyleSheet.create(globalstyles)

