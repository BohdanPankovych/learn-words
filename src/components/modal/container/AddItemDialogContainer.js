import React from "react";
import {connect} from "react-redux";
import modalActions from '../../../data/redux/modal/modalActions';
import AddItemDialog from '../AddItemDialog';

const mapStateToProps = state => ({
    word: state.modal.get("word"),
    dictionary: state.modal.get("dictionary")
});
const mapDispatchToProps = {
    ...modalActions
};

const AddItemDialogContainer = props => <AddItemDialog {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItemDialogContainer);
