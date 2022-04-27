import React from "react";
import {connect} from "react-redux";
import DictionariesListScreen from "../DictionaryList/DictionariesListScreen";
import { setDictionaries, deleteDictionary } from '../../data/redux/dictionary/dictionaryActions';

const mapStateToProps = state => ({
    dictionaries: state.dictionary.get("dictionary"),
});
const mapDispatchToProps = {
    setDictionaries,
    deleteDictionary
};

const DictionaryListContainer = props => <DictionariesListScreen {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictionaryListContainer);
