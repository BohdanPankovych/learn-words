import taskActionTypes from './taskActionTypes';

export const setWords = (words) => ({
    type: taskActionTypes.SET_WORDS,
    payload: { words }
})

export const setTask = (task) => ({
    type: taskActionTypes.SET_TASK,
    payload: { task }
})

export const nextTask = () => ({
    type: taskActionTypes.NEXT_TASK,
})

export const resetReducer = () => ({
    type: taskActionTypes.RESET_REDUCER
})

export default {
    setWords,
    setTask,
    nextTask,
    resetReducer
}