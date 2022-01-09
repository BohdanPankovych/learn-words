import React from "react";
import {connect} from "react-redux";
import DictionariesListScreen from "../DictionaryList/DictionariesListScreen";

const mapStateToProps = state => ({
    dictionaries: state.dictionary.get("dictionary"),
});
const mapDispatchToProps = {};

const DictionaryListContainer = props => <DictionariesListScreen {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictionaryListContainer);
