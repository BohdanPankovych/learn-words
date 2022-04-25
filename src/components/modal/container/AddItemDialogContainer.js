import React from "react";
import {connect} from "react-redux";
import AddItemDialog from '../AddItemDialog';

const mapStateToProps = state => ({
});
const mapDispatchToProps = {};

const AddItemDialogContainer = props => <AddItemDialog {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItemDialogContainer);
