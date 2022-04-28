import React from "react";
import {connect} from "react-redux";
import AddItemButton from '../AddItemButton';
import { createDictionary } from '../../../data/redux/dictionary/dictionaryActions';
import { resetReducer } from '../../../data/redux/modal/modalActions';

const mapStateToProps = state => ({
    word: state.modal.get("word"),
    dictionary: state.modal.get("dictionary"),
    dictionaries: state.dictionary.get("dictionary")
});
const mapDispatchToProps = {
    createDictionary,
    resetReducer
};

const AddItemContainer = props => <AddItemButton {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItemContainer);
