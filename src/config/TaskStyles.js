import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        padding: 20, 
        paddingBottom: 80,
        backgroundColor: "#FFFFFF", 
    }, 
    title: { 
        fontSize: 28, 
        fontWeight: "bold", 
        marginBottom: 20, 
        color: "#333", 
        textAlign: "center", 
    }, 
    taskList: { 
        flex: 1, 
    }, 
    taskItem: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        backgroundColor: "#fff", 
        marginBottom: 10, 
        padding: 15, 
        borderRadius: 10, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 2,
    }, 
    taskTextContainer: { 
        flex: 1, 
    }, 
    taskText: { 
        fontSize: 18, 
        fontWeight: "bold", 
        color: "#333", 
    }, 
    completedTaskText: { 
        textDecorationLine: "line-through", 
        color: "gray", 
    }, 
    taskDescription: { 
        fontSize: 16, 
        color: "#666", 
    }, 
    taskTime: { 
        fontSize: 14, 
        color: "#666", 
    }, 
    taskStatus: { 
        fontSize: 16, 
        color: "#666", 
    }, 
    buttonContainer: { 
        flexDirection: "column",  
        marginVertical: 2,  
    }, 
    editButton: { 
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#007BFF",
        borderRadius: 5,
        padding: 5,
        marginRight: 0,
        width: 30,
    }, 
    button: { 
        marginBottom: 10, 
    }, 
    completeButton: { 
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 50,
        padding: 2,
        marginRight: 15,
        width: 24,
    }, 
    completedButton: { 
        backgroundColor: "#2ECC71", 
    }, 
    buttonText: { 
        color: "#fff", 
        marginLeft: 5,
    }, 
    deleteButton: { 
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FF9500",
        borderRadius: 5,
        padding: 5,
        width: 30,
    }, 
    addButton: { 
        position: "absolute",
        left: 20,              // Left position
        right: 20,             // Right position
        bottom: 20, 
        justifyContent: "center", 
        backgroundColor: "#2ECC71", 
        paddingVertical: 15, 
        borderRadius: 10,
    }, 
    addButtonText: { 
        color: "#fff", 
        fontSize: 18, 
        fontWeight: "bold", 
    }, 
    modalContainer: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: "#fff", 
    }, 
    input: { 
        borderWidth: 1, 
        borderColor: "#ccc", 
        padding: 10, 
        marginBottom: 15, 
        borderRadius: 10, 
        fontSize: 16, 
    }, 
    inputLabel: { 
        fontSize: 16, 
        fontWeight: "bold", 
        marginBottom: 10,
        marginTop: 0,
    }, 
    errorText: { 
        color: "#FF3B30", 
        fontSize: 14, 
        marginBottom: 10, 
    }, 
    taskDeadline: { 
        color: "#FF3B12", 
    }, 
    taskCreatedAt: { 
        color: "#5497FF", 
    }, 
    categoryList: {
        flexDirection: "row",
        maxHeight: 40,
        marginBottom: 10,
    },
    categoryItem: {
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#2ECC71",
    },
    selectedCategory: {
        backgroundColor: "#2ECC71",
    },
    selectedCategory2: {
        color: "black",
    },
    categoryText: {
        color: "black",
        fontWeight: "bold",
    },
    newCategoryContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    newCategoryInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        marginRight: 10,
    },
    addCategoryButton: {
        backgroundColor: "#2ECC71",
        padding: 12,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    addCategoryButtonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
    },
    addButton: {
        backgroundColor: "#2ECC71",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 0,
    },
    cancelButtonTextSideBySide: {
        color: "#333", // Black color for text
        fontSize: 16,
        fontWeight: "bold",
    },
    addButtonSideBySide: {
        flex: 1, // Take up half the space
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: "#2ECC71",
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonSideBySide: {
        flex: 1, // Take up half the space
        marginTop: 10,
        marginRight: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "black",
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    datePicker: {
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 10,
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "80 %",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
    },
    deleteCategoryButton: {
        alignSelf: "flex-end",
        backgroundColor: "#D24545",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    deleteCategoryButtonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
    },
    rightActionContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    rightAction: {
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        height: 130,
        marginBottom: 10,
        borderRadius: 5,
        marginLeft: 2,
    },
    actionLabel: {
        color: "#fff",
        fontSize: 12,
        marginTop: 5,
    },
    completedSectionHeader: {
        backgroundColor: "#ffff",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    completedSectionHeaderText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    segmentedControl: {
        margin: 10,
        marginTop: 0,
        marginBottom: 15,
        padding: 5,
        backgroundColor: 'white',
        borderColor: '#2ECC71',
        borderWidth: 1,
        borderRadius: 10,
        height: 45,
    },
    segmentedControlText: {
        fontSize: 15,  
        fontWeight: '500',  
        color: '#333',  
    },
    taskTypeButton: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#2ECC71',
        borderRadius: 5,
    },
    taskTypeButtonSelected: {
        backgroundColor: '#2ECC71',
    },
    taskTypeButtonText: {
        fontSize: 16,
        color: 'black',
    },
    taskTypeButtonTextSelected: {
        color: 'white',
    },
    priorityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    priorityButton: {
        borderWidth: 1,
        borderRadius: 15,
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: "#f0f0f0",
    },
    priorityLow: {
        borderColor: "green",
        backgroundColor: "#d4edda",
    },
    priorityMedium: {
        borderColor: "yellow",
        backgroundColor: "#fff3cd",
    },
    priorityHigh: {
        borderColor: "red",
        backgroundColor: "#f8d7da",
    },
    priorityButtonText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
    },
    taskPriorityIndicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    priorityIndicator: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 20,
        alignSelf: 'flex-start', // Ensures that the tag doesn't stretch to the width of the container
        marginRight: 10, // Adds a margin to the right of the tag
        marginBottom: 6, // Optional: if you want to add a margin below the tag
    },
    priorityText: {
        color: '#fff', // White text for the priority indicator
        fontWeight: 'bold',
        fontSize: 12,
    },
    colorOption: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    colorOptionSelected: {
        borderColor: "#2ECC71",
        borderWidth: 2,
    },
    deadlineContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    datePicker: {
        flex: 1,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
    },
    timePicker: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
    },
    addMemberInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        fontSize: 16,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    searchBar: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
    },
    searchIconContainer: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#2ECC71', // Or any color you want for the background
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchIcon: {
        color: 'white',
    },
    activeSectionHeader: {
        backgroundColor: "#ffff",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    activeSectionHeaderText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
}); 

export default styles;
