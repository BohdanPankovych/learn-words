import {valsWithPrefix} from "../../helpers";

const dictionaryActionTypes = {
    CREATE_DICTIONARY: "CREATE_DICTIONARY",
    DELETE_DICTIONARY: "DELETE_DICTIONARY"
};

export default valsWithPrefix('DICTIONARY_')(dictionaryActionTypes)