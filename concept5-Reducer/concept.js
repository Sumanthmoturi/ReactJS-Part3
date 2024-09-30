/*1.Reducer:-
             1.you can consolidate all the state update logic outside your component in a single function, called a reducer.
*/


/*Consolidate state logic with a reducer:-
                                           1.Reducers are a different way to handle state. 
                                           2.You can migrate from useState to useReducer in three steps:
                                                             ->Move from setting state to dispatching actions.
                                                             ->Write a reducer function.
                                                             ->Use the reducer from your component.
*/
//Import the useReducer Hook from React,The useReducer Hook takes two arguments:a reducer function,initial state

import { useReducer } from 'react';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
//Move from setting state to dispatching actions 
  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
//Write a reducer function,A reducer function is where you will put your state logic,It takes two arguments, the current state and the action object, and it returns the next state:
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];
