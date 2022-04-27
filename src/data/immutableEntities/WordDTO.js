import "react-native-get-random-values";
import Immutable from "immutable"
import * as uuid from 'uuid';

const WordDTO = new Immutable.Record({
    id: uuid.v4(),
    wordName: "",
    wordTranslate: ""
})

export default WordDTO;