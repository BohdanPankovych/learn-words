import React from "react";
import {connect} from "react-redux";
import AddItemButton from '../AddItemButton';
import { setDictionaries } from '../../../data/redux/dictionary/dictionaryActions';
import { addWord, setWords } from '../../../data/redux/words/wordsActions';
import { resetReducer } from '../../../data/redux/modal/modalActions';

const mapStateToProps = state => ({
    word: state.modal.get("word"),
    dictionary: state.modal.get("dictionary"),
});
const mapDispatchToProps = {
    setDictionaries,
    setWords,
    resetReducer
};

const AddItemContainer = props => <AddItemButton {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItemContainer);
