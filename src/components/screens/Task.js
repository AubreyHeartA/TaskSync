import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, TextInput, ImageBackground, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Feather } from "@expo/vector-icons";
import styles from "../../config/TaskStyles";
import TaskModal from "../forms/TaskModal";
import TaskList from "../forms/TaskList";

const backgroundImage = require("../../../assets/emptyImage.png");

const Task = ({ route }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
    deadline: "",
    createdAt: "",
    category: "",
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [validationError, setValidationError] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newCategory, setNewCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTasksCount, setActiveTasksCount] = useState(0);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem('tasks');
        const savedCategories = await AsyncStorage.getItem('categories');

        if (savedTasks) {
          setTasks(JSON.parse(savedTasks));
          setFilteredTasks(JSON.parse(savedTasks));
        }

        if (savedCategories) {
          setCategories(JSON.parse(savedCategories));
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

// After loading tasks, update the counts
  useEffect(() => {
    const active= tasks.filter(t => t.status === "Pending").length;
    const completed = tasks.filter(t => t.status === "Completed").length;
    setActiveTasksCount(active);
    setCompletedTasksCount(completed);
  }, [tasks]);

  // Save tasks and categories to AsyncStorage whenever they change
  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
        await AsyncStorage.setItem('categories', JSON.stringify(categories));
      } catch (error) {
        console.error('Error saving data:', error);
      }
    };

    saveData();
  }, [tasks, categories]);


  const handleAddTask = () => {
    setEditingTask(null);
    setTask({
      title: "",
      description: "",
      status: "Pending",
      deadline: "",
      createdAt: "",
      category: "",
    });
    setModalVisible(true);
    setValidationError(false);
  };

  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      if (!categories.includes(newCategory)) {
        setCategories([...categories, newCategory]);
        setTask({ ...task, category: newCategory });
        setNewCategory("");
        setModalVisible(true);
      } else {
        alert("Category already exists!");
      }
    }
  };

  
  const handleAddTaskAndCategory = () => {
    if (
      task.title.trim() !== "" &&
      (task.category.trim() !== "" || newCategory.trim() !== "")
    ) {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString();
  
      const updatedTask = {
        id: editingTask ? editingTask.id : Date.now(),
        ...task,
        createdAt: formattedDate,
        category: task.category || newCategory,
      };
  
      if (editingTask) {
        const updatedTasks = tasks.map((t) =>
          t.id === editingTask.id ? updatedTask : t
        );
        setTasks(updatedTasks);
  
        if (
          selectedCategory === "All" ||
          selectedCategory === updatedTask.category
        ) {
          const updatedFilteredTasks = filteredTasks.map((t) =>
            t.id === editingTask.id ? updatedTask : t
          );
          setFilteredTasks(updatedFilteredTasks);
        }
      } else {
        setTasks((prevTasks) => [...prevTasks, updatedTask]);
  
        if (
          selectedCategory === "All" ||
          selectedCategory === updatedTask.category
        ) {
          setFilteredTasks((prevFilteredTasks) => [...prevFilteredTasks, updatedTask]);
        }
      }
  
      setTask({
        title: "",
        description: "",
        status: "Pending",
        createdAt: "",
        category: "",
      });
      setModalVisible(false);
      setValidationError(false);
  
      // Update the navigation to 'Profile' screen
      navigation.navigate('Task', { updatedTasks: [...tasks, updatedTask] });
    } else {
      setValidationError(true);
    }
    saveData();
  };
  
  const handleEditTask = (task) => { 
    setTask((prevTask) => {
      const updatedTask = { ...prevTask };
      for (const key in task) {
        if (task.hasOwnProperty(key)) {
          updatedTask[key] = task[key];
        }
      }
      return updatedTask;
    });  
    setEditingTask(task);
    setModalVisible(true);  
  }; 

  const handleDeleteTask = (taskId) => { 
    const updatedTasks = tasks.filter((t) => t.id !== taskId); 
    setTasks(updatedTasks);
    
    const updatedFilteredTasks = filteredTasks.filter((t) => t.id !== taskId);
    setFilteredTasks(updatedFilteredTasks);

    navigation.navigate('Task', { updatedTasks });
  }; 

  const handleToggleCompletion = (taskId) => { 
    const updatedTasks = tasks.map((t) => t.id === taskId ? { ...t, status: t.status === "Pending" ? "Completed" : "Pending", } : t ); 
    setTasks(updatedTasks); 

    const updatedFilteredTasks = filteredTasks.map((t) => t.id === taskId ? { ...t, status: t.status === "Pending" ? "Completed" : "Pending", } : t );
    setFilteredTasks(updatedFilteredTasks);

    navigation.navigate('Task', { updatedTasks });
  };

  const handleFilterByCategory = (selectedCategory) => {
    if (selectedCategory === "All") {
      setFilteredTasks(tasks);
    } else {
      const filteredTasks = tasks.filter((t) => t.category.toLowerCase() === selectedCategory.toLowerCase());
      setFilteredTasks(filteredTasks);
    }
    setSelectedCategory(selectedCategory);
  };

  const handleFilterByTitle = (title) => {
    const filteredTasks = tasks.filter((t) =>
      t.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilteredTasks(filteredTasks);
  };

  const handleDeleteCategory = (category) => {
    const updatedTasks = tasks.filter((t) => t.category !== category);
    setTasks(updatedTasks);

    const updatedCategories = categories.filter((c) => c !== category);
    setCategories(updatedCategories);

    if (selectedCategory === category) {
      handleFilterByCategory("All");
    } else {
      setFilteredTasks(tasks.filter((t) => t.category.toLowerCase() === selectedCategory.toLowerCase()));
    }
    saveData();
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      await AsyncStorage.setItem('categories', JSON.stringify(categories));
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };

  const renderSearchBar = () => {
    return (
      <View style={styles.searchBarContainer}>
        <View style={styles.searchIconContainer}>
          <Feather name="search" size={20} style={styles.searchIcon} />
        </View>
        <TextInput
          style={styles.searchBar}
          placeholder="Search task here"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>
    );
  };

  const renderCategories = () => {
    return (
      <ScrollView horizontal style={styles.categoryList}>
        <TouchableOpacity
          style={[ styles.categoryItem, selectedCategory === "All" && styles.selectedCategory, ]}
          onPress={() => handleFilterByCategory("All")}
        >
          <Text style={[styles.categoryText, selectedCategory === "All" && {color: "#fff"}]}>All</Text>
        </TouchableOpacity>

        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[ styles.categoryItem, selectedCategory === category && styles.selectedCategory, ]}
            onPress={() => handleFilterByCategory(category)}
          >
            <Text style={[styles.categoryText, selectedCategory === category && { color: "#fff" }]}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const renderTaskList = () => {
    if (filteredTasks.length === 0) {
      return (<ImageBackground source={backgroundImage} style={styles.backgroundImage}></ImageBackground>);
    }

    return (
      <TaskList
        tasks={filteredTasks}
        handleEditTask={handleEditTask}
        handleToggleCompletion={handleToggleCompletion}
        handleDeleteTask={handleDeleteTask}
      />
    );
  };

  useEffect(() => {
    handleFilterByTitle(searchQuery);
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      {renderSearchBar()}
      {renderCategories()}
      {renderTaskList(filteredTasks)}
  
      <TouchableOpacity
        style={styles.addButton} 
        onPress={handleAddTask}
      >
        <Text style={[styles.addButtonText, { fontSize: 16 }]}>Add Task</Text>
      </TouchableOpacity>
  
      <TaskModal
        modalVisible={modalVisible}
        task={task}
        setTask={setTask}
        handleAddTask={handleAddTask}
        handleCancel={() => {
          setEditingTask(null);
          setTask({
            title: "",
            description: "",
            status: "Pending",
            deadline: "",
            createdAt: "",
            category: "",
          });
          setModalVisible(false);
          setValidationError(false);
        }}
        validationError={validationError}
        categories={categories}
        setNewCategory={setNewCategory}
        newCategory={newCategory}
        handleAddCategory={handleAddCategory}
        handleAddTaskAndCategory={handleAddTaskAndCategory}
        handleDeleteCategory={handleDeleteCategory}
      />
    </View>
  );
};

export default Task;