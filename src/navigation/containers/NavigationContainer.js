import React from "react";
import {connect} from "react-redux";
import Navigation from "../index";
import { createDictionary } from "../../data/redux/dictionary/dictionaryActions";

const mapStateToProps = state => ({});
const mapDispatchToProps = {
    createDictionary,
};

const NavigationContainer = props => <Navigation {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationContainer);
