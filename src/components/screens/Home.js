import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Icon } from 'react-native-paper';
import globalstyles from '../../config/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon source="magnify" size={24} color="black" />
        </View>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.userName}>User 001!</Text>
        <View style={styles.taskSummaryContainer}>
          <TouchableOpacity style={[styles.taskSummary, styles.ongoing]}>
            <Text style={styles.taskCount}>4 Tasks</Text>
            <Text style={styles.taskLabel}>Ongoing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.taskSummary, styles.completed]}>
            <Text style={styles.taskCount}>1 Task</Text>
            <Text style={styles.taskLabel}>Completed</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.allTasksTitle}>All Tasks</Text>
        <ScrollView style={styles.taskList}>
          <TaskItem priority="High" category="APDET" title="Activity 2 Checking" date="08 April, 10:00 AM" />
          <TaskItem priority="Medium" category="APDET" title="All Activity Checking" date="14 April, 10:00 AM" />
          <TaskItem priority="Low" category="Capstone" title="Concept Presentation" date="15 May, 10:00 AM" />
        </ScrollView>
        <View style={styles.navigationBar}>
          {/* Navigation icons here */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const TaskItem = ({ priority, category, title, date }) => {
  const priorityColor = {
    High: 'red',
    Medium: 'yellow',
    Low: 'green',
  };

  return (
    <TouchableOpacity style={styles.taskItem}>
      <View style={[styles.priorityIndicator, { backgroundColor: priorityColor[priority] }]} />
      <View style={styles.taskDetails}>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskDate}>{date}</Text>
      </View>
      <Text style={styles.taskCategory}>{category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(globalstyles);
