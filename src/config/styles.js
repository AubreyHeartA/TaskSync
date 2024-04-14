const globalstyles = {
    safeArea: {
      flex: 1,
      backgroundColor: '#fff',
    },
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 16,
    },
    welcomeText: {
      fontSize: 22,
      fontWeight: 'bold',
      marginLeft: 16,
      marginTop: 32,
      color: '#000',
    },
    userName: {
      fontSize: 22,
      fontWeight: 'bold',
      marginLeft: 16,
      marginBottom: 16,
      color: '#000',
    },
    taskSummaryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    },
    taskSummary: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      margin: 8,
      borderRadius: 20,
    },
    ongoing: {
      backgroundColor: '#fde8e4',
    },
    completed: {
      backgroundColor: '#e4fcef',
    },
    taskCount: {
      fontSize: 18,
      fontWeight: '600',
      color: '#000',
    },
    taskLabel: {
      fontSize: 16,
      color: '#000',
    },
    allTasksTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingLeft: 16,
      marginVertical: 16,
    },
    taskList: {
      paddingHorizontal: 16,
    },
    taskItem: {
      flexDirection: 'row',
      padding: 20,
      marginBottom: 16,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    priorityIndicator: {
      width: 16,
      height: 16,
      borderRadius: 8,
      marginRight: 16,
    },
    taskDetails: {
      flex: 1,
    },
    taskTitle: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 4,
    },
    taskDate: {
      fontSize: 14,
      color: '#757575',
    },
    taskCategory: {
      fontWeight: '600',
      color: '#fff',
      backgroundColor: '#b4a5ff',
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 15,
      overflow: 'hidden',
    },
    navigationBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      paddingVertical: 10,
    },
};

export default globalstyles;