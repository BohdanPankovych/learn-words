import Immutable from "immutable"
import "react-native-get-random-values";
import * as uuid from 'uuid';

const DictionaryDTO = new Immutable.Record({
    wordsFileName: "",
    dictionaryName: "",
    wordCount: 0
})

export default DictionaryDTO;