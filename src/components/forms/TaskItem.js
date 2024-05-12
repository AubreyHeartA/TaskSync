import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import { RectButton } from "react-native-gesture-handler";
import styles from "../../config/TaskStyles";

const TaskItem = ({ task, handleEditTask, handleToggleCompletion, handleDeleteTask }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return '#FF3B30'; 
      case 'Medium':
        return '#FFCC00'; 
      case 'Low':
        return '#34C759'; 
      default:
        return '#C7C7CC'; 
    }
  };
  
  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [0, 0.5, 1],
    });

    return (
      <View style={styles.rightActionContainer}>
        <RectButton
          onPress={() => handleEditTask(task)}
          style={[styles.rightAction, { backgroundColor: "#5497FF" }]}
        >
          <Feather name="edit" size={20} color="#fff" />
          <Text style={styles.actionLabel}>Edit</Text>
        </RectButton>
        <RectButton
          onPress={() => handleDeleteTask(task.id)}
          style={[styles.rightAction, { backgroundColor: "#D24545" }]}
        >
          <Feather name="trash-2" size={20} color="#fff" />
          <Text style={styles.actionLabel}>Delete</Text>
        </RectButton>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.taskItem}>
        <TouchableOpacity
          onPress={() => handleToggleCompletion(task.id, task.status)}
          style={[
            styles.completeButton,
            task.status === "Completed" && styles.completedButton,
          ]}
        >
          <Feather
            name={task.status === "Completed" ? "check-circle" : "circle"}
            size={20}
            color={task.status === "Completed" ? "#fff" : "#5ccb51"}
          />
        </TouchableOpacity>
        <View style={styles.taskTextContainer}>
          <View style={styles.priorityContainer}>
            <View style={[styles.priorityIndicator, { backgroundColor: getPriorityColor(task.priority) }]}>
              <Text style={styles.priorityText}>{task.priority}</Text>
            </View>
          </View>
          <Text style={[styles.taskText, task.status === "Completed" && styles.completedTaskText]}>{task.title}</Text>
          <Text style={[styles.taskDescription, task.status === "Completed" && styles.completedTaskText]}>{task.description}</Text>
          <Text style={styles.taskStatus}>Status: {task.status}</Text>
          <Text style={styles.taskDeadline}>Deadline: {task.deadline}</Text>
          <Text style={styles.taskCreatedAt}>Created: {task.createdAt}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default TaskItem;
