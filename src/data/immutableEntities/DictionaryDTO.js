import Immutable from "immutable"
import "react-native-get-random-values";
import * as uuid from 'uuid';

const DictionaryDTO = new Immutable.Record({
    //TODO: Change id generation to avoid replace
    id: uuid.v4().replace(/-/g, ""),
    dictionaryName: "",
    wordCount: 0
})

export default DictionaryDTO;