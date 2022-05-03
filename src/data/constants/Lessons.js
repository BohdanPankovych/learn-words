import translate from '../../assets/images/translate.png';
import words from '../../assets/images/words.png';
export const LessonNames = {
    WORDS: "WORDS",
    TRANSLATE: "TRANSLATE"
}

const TASK_TYPES = {
    SELECT_WORD: "SELECT_WORD",
    SELECT_TRANSLATE: "SELECT_TRANSLATE"
}

export const TASK_TYPES_VALUE = {
    [TASK_TYPES.SELECT_WORD]: false,
    [TASK_TYPES.SELECT_TRANSLATE]: true
}

const Lessons = [
    {id: "0", name: LessonNames.WORDS, img: words, taskType: TASK_TYPES.SELECT_WORD},
    {id: "1", name: LessonNames.TRANSLATE, img: translate, taskType: TASK_TYPES.SELECT_TRANSLATE},
    {id: "2", name: "", img: 0, taskType: null},
    {id: "3", name: "", img: 0, taskType: null},
    {id: "4", name: "", img: 0, taskType: null},
    {id: "5", name: "", img: 0, taskType: null},
]

export default Lessons;