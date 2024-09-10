import { createStore } from 'redux';

// Initial state
const initialState = {
  tasks: []
};

// Actions
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';

// Action Creators
export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });

// Reducer
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    default:
      return state;
  }
};

// Create store
const store = createStore(taskReducer);

export default store;
