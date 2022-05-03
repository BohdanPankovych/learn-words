import {valsWithPrefix} from "../../helpers";

const dictionaryActionTypes = {
    SET_DICTIONARIES: "SET_DICTIONARIES",
    CREATE_DICTIONARY: "CREATE_DICTIONARY",
    DELETE_DICTIONARY: "DELETE_DICTIONARY",
    SELECT_DICTIONARY: "SELECT_DICTIONARY"
};

export default valsWithPrefix('DICTIONARY_')(dictionaryActionTypes)