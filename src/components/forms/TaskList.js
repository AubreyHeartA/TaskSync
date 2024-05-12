import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native"; 
import TaskItem from "./TaskItem"; 
import styles from "../../config/TaskStyles"; 

const TaskList = ({ tasks, handleEditTask, handleToggleCompletion, handleDeleteTask }) => {
    const [showActiveTasks, setShowActiveTasks] = useState(true);
    const [showCompletedTasks, setShowCompletedTasks] = useState(false);
    const activeTasks = tasks.filter((task) => task.status !== "Completed");
    const completedTasks = tasks.filter((task) => task.status === "Completed");

    return (
        <ScrollView style={styles.taskList}>
            <TouchableOpacity
                style={styles.activeSectionHeader}
                onPress={() => setShowActiveTasks(!showActiveTasks)}
            >
                <Text style={styles.activeSectionHeaderText}>
                    Active Tasks {showActiveTasks ? "▼" : "▶"}
                </Text>
            </TouchableOpacity>

            {showActiveTasks && (
                <View>
                    {activeTasks.map((t, index) => (
                        <TaskItem
                            key={index}
                            task={t}
                            handleEditTask={handleEditTask}
                            handleToggleCompletion={handleToggleCompletion}
                            handleDeleteTask={handleDeleteTask}
                        />
                    ))}
                </View>
            )}

            {completedTasks.length > 0 && (
                <>
                    <TouchableOpacity
                        style={styles.completedSectionHeader}
                        onPress={() => setShowCompletedTasks(!showCompletedTasks)}
                    >
                        <Text style={styles.completedSectionHeaderText}>
                            Completed {showCompletedTasks ? "▼" : "▶"}
                        </Text>
                    </TouchableOpacity>

                    {showCompletedTasks && (
                        <View>
                            {completedTasks.map((t, index) => (
                                <TaskItem
                                    key={index}
                                    task={t}
                                    handleEditTask={handleEditTask}
                                    handleToggleCompletion={handleToggleCompletion}
                                    handleDeleteTask={handleDeleteTask}
                                />
                            ))}
                        </View>
                    )}
                </>
            )}
        </ScrollView>
    );
};

export default TaskList;