import React from "react";
import {connect} from "react-redux";
import Root from "../index";
import { createDictionary } from "../../data/redux/dictionary/dictionaryActions";

const mapStateToProps = state => ({});
const mapDispatchToProps = {
    createDictionary,
};

const RootContainer = props => <Root {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RootContainer);
