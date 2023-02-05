import {valsWithPrefix} from "../../helpers";

const modalActionTypes = {
    SET_WORDS: "SET_WORDS",
    SET_TASK: "SET_TASK",
    NEXT_TASK: "NEXT_TASK",
    RESET_REDUCER: "RESET_REDUCER",

    ADD_COUNTER: "ADD_COUNTER",
}

export default valsWithPrefix('TASK_')(modalActionTypes)