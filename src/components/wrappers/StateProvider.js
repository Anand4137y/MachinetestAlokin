import React, { Component } from 'react';
import { FILTER_ALL } from '../../services/filter';
import { MODE_CREATE, MODE_NONE } from '../../services/mode';
import { objectWithOnly, wrapChildrenWith } from '../../util/common';
import { getAll, addToList, updateStatus } from '../../services/todo';

class StateProvider extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            mode: MODE_CREATE,
            filter: FILTER_ALL,
            list: getAll(),
            priority: 'Medium',  // Default priority
            dueDate: '', // Default empty date
            text: '', // Text input for new task
        };
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, [
                'addNew', 'changeFilter', 'changeStatus', 'changeMode', 'setSearchQuery', 'handlePriorityChange', 'handleDateChange', 'handleTextChange'
            ]),
        });

        return <div>{children}</div>;
    }

    addNew() {
        const { text, priority, dueDate } = this.state;
        const createdTime = new Date().toLocaleString();
        const newTask = {
            text,
            completed: false,
            priority,
            dueDate,
            createdTime,
        };
        let updatedList = addToList(this.state.list, newTask);
        this.setState({ list: updatedList, text: '', priority: 'Medium', dueDate: '' });
    }

    changeFilter(filter) {
        this.setState({ filter });
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.list, itemId, completed);
        this.setState({ list: updatedList });
    }

    changeMode(mode = MODE_NONE) {
        this.setState({ mode });
    }

    setSearchQuery(text) {
        this.setState({ query: text || '' });
    }

    handlePriorityChange = (event) => {
        this.setState({ priority: event.target.value });
    };

    handleDateChange = (event) => {
        this.setState({ dueDate: event.target.value });
    };

    handleTextChange = (event) => {
        this.setState({ text: event.target.value });
    };
}

export default StateProvider;
