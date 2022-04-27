import Immutable from "immutable"
import "react-native-get-random-values";
import * as uuid from 'uuid';

const DictionaryDTO = new Immutable.Record({
    id: uuid.v4(),
    dictionaryName: "",
    wordCount: 0
})

export default DictionaryDTO;