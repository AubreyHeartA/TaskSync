import React, { useState } from "react"; 
import { View, Text, TextInput, Modal, ScrollView, TouchableOpacity} from "react-native"; 
import styles from "../../config/TaskStyles"; 
import ModalSelector from 'react-native-modal-selector';
import DatePicker from "react-native-modern-datepicker"; 
import { Feather } from "@expo/vector-icons";
import SegmentedControl from '@react-native-community/segmented-control';
import DateTimePicker from 'react-native-modal-datetime-picker';

const TaskModal = ({ modalVisible, task, setTask, handleCancel, validationError, categories, setNewCategory, newCategory, handleAddCategory, handleAddTaskAndCategory, handleDeleteCategory}) => { 
    const [selectedCategory, setSelectedCategory] = useState(task.category || ""); 
    const [taskType, setTaskType] = useState("Individual");

    const handleCategoryChange = (option) => {
        setSelectedCategory(option.value);
        setTask({ ...task, category: option.value });
    };

    const handleDeleteCategoryPress = () => {
        setNewCategory("");
        setSelectedCategory("");
        handleDeleteCategory(selectedCategory);
    };

    return ( 
        <Modal visible={modalVisible} animationType="slide" transparent={false}> 
        <View style={styles.modalContainer}> 
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                    <TouchableOpacity onPress={handleCancel}>
                        <Feather name="arrow-left" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}>New Task</Text>
                </View>

                <SegmentedControl
                    values={['Individual', 'Team']}
                    selectedIndex={taskType === 'Individual' ? 0 : 1}
                    onChange={(event) => {
                        setTaskType(event.nativeEvent.selectedSegmentIndex === 0 ? 'Individual' : 'Team');
                    }}
                    style={styles.segmentedControl}
                />

                <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 20 }}>
                    <TouchableOpacity
                        style={[styles.button, taskType === "Individual" ? styles.selectedButton : {}]}
                        onPress={() => setTaskType("Individual")}
                    >
                        <Text style={styles.buttonText}>Individual</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, taskType === "Team" ? styles.selectedButton : {}]}
                        onPress={() => setTaskType("Team")}
                    >
                        <Text style={styles.buttonText}>Team</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.inputLabel}>Title:</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter Task Title"
                    value={task.title} 
                    onChangeText={(text) => setTask({ ...task, title: text })} 
                    /> 

                <Text style={styles.inputLabel}>Description:</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter Task Description"
                    value={task.description} 
                    onChangeText={(text) => setTask({ ...task, description: text })}
                /> 

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Text style={styles.inputLabel}>Category: <Text style={{color: '#008B8B'}}> {selectedCategory} </Text></Text>
                        <ModalSelector
                            data={categories.map((category, index) => ({
                                key: index,
                                label: category,
                                value: category,
                            }))}
                            initValue={selectedCategory || "Select Category"}
                            onChange={handleCategoryChange}
                            style={styles.modalSelector}
                        />
                    </View>

                    {selectedCategory && (
                        <TouchableOpacity
                            style={styles.deleteCategoryButton}
                            onPress={handleDeleteCategoryPress}
                        >
                            <Text style={styles.deleteCategoryButtonText}>Delete Category</Text>
                        </TouchableOpacity>
                    )}
                </View>
                
                <View style={styles.newCategoryContainer}>
                    <TextInput
                    style={styles.newCategoryInput}
                    placeholder="New Category"
                    value={newCategory}
                    onChangeText={(text) => setNewCategory(text)}
                    />
                    <TouchableOpacity style={styles.addCategoryButton} onPress={handleAddCategory}>
                    <Text style={styles.addCategoryButtonText}>Add Category</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.inputLabel}>Priority:</Text>
                <View style={styles.priorityContainer}>
                    <TouchableOpacity
                        style={[
                            styles.priorityButton,
                            task.priority === 'Low' && styles.priorityLow
                        ]}
                        onPress={() => setTask({ ...task, priority: 'Low' })}
                    >
                        <Text style={styles.priorityButtonText}>Low</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.priorityButton,
                            task.priority === 'Medium' && styles.priorityMedium
                        ]}
                        onPress={() => setTask({ ...task, priority: 'Medium' })}
                    >
                        <Text style={styles.priorityButtonText}>Medium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.priorityButton,
                            task.priority === 'High' && styles.priorityHigh
                        ]}
                        onPress={() => setTask({ ...task, priority: 'High' })}
                    >
                        <Text style={styles.priorityButtonText}>High</Text>
                    </TouchableOpacity>
                    </View>

                <Text style={styles.inputLabel}> Deadline: </Text> 
                <DatePicker 
                    style={styles.datePicker} 
                    mode="datepicker"
                    selected={task.deadline} 
                    onDateChange={(date) => setTask({ ...task, deadline: date }) }
                /> 

                {taskType === 'Team' && (
                    <View>
                        <Text style={styles.inputLabel}>Add Member:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter member's name or email"
                            value={newMember}
                            onChangeText={(text) => setNewMember(text)}
                        />
                        <TouchableOpacity onPress={handleAddMember} style={styles.button}>
                            <Text style={styles.buttonText}>Add Member</Text>
                        </TouchableOpacity>
                        <Text style={styles.inputLabel}>Attachments:</Text>
                        <TouchableOpacity onPress={handleAddAttachment} style={styles.button}>
                            <Text style={styles.buttonText}>Upload File</Text>
                        </TouchableOpacity>
                    </View>
                )}


                {validationError && ( 
                    <Text style={styles.errorText}> Please fill in all fields correctly. </Text> 
                )}
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={handleAddTaskAndCategory}
                >
                    <Text style={styles.buttonText}>
                    {task.id ? "Update" : "Add"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={handleCancel}
                >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </ScrollView>
        </View> 
        </Modal> 
    ); 
}; 

export default TaskModal;