import {valsWithPrefix} from "../../helpers";

const modalActionTypes = {
    SET_DICTIONARY_NAME: "SET_DICTIONARY_NAME",
    SET_WORD_NAME: "SET_WORD_NAME",
    SET_WORD_TRANSLATE: "SET_WORD_TRANSLATE",
    ADD_WORD: "ADD_WORD"
}

export default valsWithPrefix('MODAL_')(modalActionTypes)