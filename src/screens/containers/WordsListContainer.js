import React from "react";
import {connect} from "react-redux";
import WordListScreen from "../WordListScreen/WordListScreen";
import { setWords, deleteWord } from '../../data/redux/words/wordsActions';

const mapStateToProps = state => ({
    words: state.words.get("words"),
});
const mapDispatchToProps = {
    setWords,
    deleteWord
};

const WordsListScreenContainer = props => <WordListScreen {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WordsListScreenContainer);
