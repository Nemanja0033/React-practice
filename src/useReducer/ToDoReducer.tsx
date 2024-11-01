import { useReducer, useState } from "react";


const initialState: any[] = [];

const taskReducer = (state: any[], action: { type: any; payload: any; index: any; }) => {
    switch(action.type){
        case 'ADD_TASK':
            return [...state, action.payload]
        case 'REMOVE_TASK':
            return state.filter((_: any, index: any) => index !== action.index);
        case 'CLEAR_TASKS':
            return [];
        default:
            return state;
    }
}

const TaskList = () => {
    const [tasks, dispatch] = useReducer(taskReducer, initialState);
    const [task, setTask] = useState('');

    const addTask = () => {
        if(task.trim()){
            dispatch({
                type: 'ADD_TASK', payload: task,
                index: undefined
            });
            setTask('')
        }
    }

    return (
        <div>
            <h2>ToDo list</h2>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="New Task"
            />
            <button onClick={addTask}>Add task</button>
            <button onClick={() => dispatch({
                type: 'CLEAR_TASKS',
                payload: undefined,
                index: undefined
            })}>Delete all</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => dispatch({
                            type: 'REMOVE_TASK', index,
                            payload: undefined
                        })}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList