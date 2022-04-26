import Immutable from "immutable"

const DictionaryDTO = new Immutable.Record({
    id: "",
    dictionaryName: "",
    wordCount: 0
})

export default DictionaryDTO;