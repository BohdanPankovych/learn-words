import React from "react";
import {connect} from "react-redux";
import TaskScreen from "../taskScreen/TaskScreen";
import taskActions from '../../data/redux/task/taskActions';

const mapStateToProps = state => ({
    task: state.task.get("task"),
    stopTest: state.task.get("stopTest"),
    selectedDictionary: state.dictionary.get("selectedDictionary")
});
const mapDispatchToProps = {
    ...taskActions
};

const TaskScreenContainer = props => <TaskScreen {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskScreenContainer);
