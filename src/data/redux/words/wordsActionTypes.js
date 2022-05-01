import {valsWithPrefix} from "../../helpers";

const dictionaryActionTypes = {
    SET_WORDS: "SET_WORDS",
    ADD_WORD: "ADD_WORD",
    DELETE_WORD: "DELETE_WORD"
};

export default valsWithPrefix('WORDS_')(dictionaryActionTypes)