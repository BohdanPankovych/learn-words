const FILEDS_NAME = {
    WORD_NAME: "wordName",
    WORD_TRANSLATE: "wordTranslate"
}

const getRandomValueFromArray = (arrayName, fieldName) => arrayName[Math.floor(Math.random() * arrayName.length)][fieldName];

const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

const tasksBuilder = (dataArray, translate = true) => {
    let tmp;
    const [wordField, translateField] = translate ? 
    [FILEDS_NAME.WORD_TRANSLATE, FILEDS_NAME.WORD_NAME]
    : [FILEDS_NAME.WORD_NAME, FILEDS_NAME.WORD_TRANSLATE];
    
    const newArray = dataArray.map(val => {
        tmp = [
            {text: val[wordField], isTrue: true},
            {text: getRandomValueFromArray(dataArray, wordField), isTrue: false},
            {text: getRandomValueFromArray(dataArray, wordField), isTrue: false}
        ]
        return {word: val[translateField], variants: shuffle(tmp)}
    });

    return shuffle(newArray);
}

export default tasksBuilder;