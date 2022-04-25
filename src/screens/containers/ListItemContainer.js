import React from "react";
import {connect} from "react-redux";
import ListItem from "../DictionaryList/ListItem";
import { deleteDictionary } from "../../data/redux/dictionary/dictionaryActions"

const mapStateToProps = state => ({});
const mapDispatchToProps = {
    deleteDictionary
};

const ListItemContainer = props => <ListItem {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItemContainer);
