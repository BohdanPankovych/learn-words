import translate from '../../assets/images/translate.png';
import words from '../../assets/images/words.png';
export const LessonNames = {
    WORDS: "WORDS",
    TRANSLATE: "TRANSLATE"
}

const Lessons = [
    {id: "0", name: LessonNames.WORDS, img: words},
    {id: "1", name: LessonNames.TRANSLATE, img: translate},
    {id: "2", name: "", img: 0},
    {id: "3", name: "", img: 0},
    {id: "4", name: "", img: 0},
    {id: "5", name: "", img: 0},
]

export default Lessons;